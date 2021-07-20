import React from 'react'
import {Formik} from "formik";

const CRSLogin = () => {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-half">
                    <h1 className="is-size-4">CRS | Login</h1>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              isValid
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control has-icons-right">
                                        <input
                                            className="input"
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="email"
                                            value={values.email}
                                            placeholder="name@host.com"/>
                                        {errors.email && touched.email && (
                                            <span className="icon is-small is-right" style={{color: 'red'}}>
                                            <i className="fas fa-exclamation-triangle is-danger"/>
                                        </span>
                                        )}
                                    </div>

                                </div>

                                <div className="field">
                                    <label className="label"> Password {errors.password && touched.password && (<span style={{color: 'red'}}>{errors.password}</span>)}</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="password"
                                            value={values.password}
                                            placeholder="password"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <button
                                            className="button s-link is-light is-fullwidth"
                                            type="submit"
                                            disabled={!isValid}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default CRSLogin
