import React from 'react'
import {Formik} from "formik";

const CRSRegister = () => {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-half">
                    <h1 className="is-size-4">CRS | Register</h1>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            gender: '',
                            phone: '',
                            city: '',
                            town: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.town) {
                                errors.town = 'Required';
                            }
                            if (!values.firstName) {
                                errors.firstName = 'Required';
                            }
                            if (!values.lastName) {
                                errors.lastName = 'Required';
                            }
                            if (!values.city) {
                                errors.city = 'Required';
                            }
                            if (!values.phone) {
                                errors.phone = 'Required';
                            }
                            if (!values.gender) {
                                errors.gender = 'Required';
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
                              isValid,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label className="label">First name</label>
                                    <div className="control has-icons-right">
                                        <input
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="input"
                                            type="text"
                                            placeholder="Your first name"
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-exclamation-circle"/>
                                            </span>
                                        )}
                                        {
                                            !errors.firstName && touched.firstName && (
                                                <span className="icon is-small is-right" style={{color: 'green'}}>
                                                <i className="fas fa-check"/>
                                            </span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Last name</label>
                                    <div className="control has-icons-right">
                                        <input
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="input"
                                            type="text"
                                            placeholder="Your last name"
                                        />
                                        {errors.lastName && touched.lastName && (
                                            <span className="icon is-small is-right">
                                            <i className="fas fa-exclamation-circle"/>
                                        </span>
                                        )}
                                        {
                                            !errors.lastName && touched.lastName && (
                                                <span className="icon is-small is-right" style={{color: 'green'}}>
                                                <i className="fas fa-check"/>
                                            </span>
                                            )
                                        }
                                    </div>
                                </div>
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
                                        {
                                            !errors.email && touched.email && (
                                                <span className="icon is-small is-right" style={{color: 'green'}}>
                                                <i className="fas fa-check"/>
                                            </span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="columns">
                                        <div className="column">
                                            <label className="label">Gender</label>
                                            <div className="control has-icons-left">
                                                {errors.gender && touched.gender && (
                                                    <span className="icon is-small is-left">
                                                        <i className="fas fa-exclamation-circle"/>
                                                    </span>
                                                )}
                                                {
                                                    !errors.gender && touched.gender && (
                                                        <span className="icon is-small is-left"
                                                              style={{color: 'green'}}>
                                                        <i className="fas fa-check"/>
                                                    </span>
                                                    )
                                                }
                                                <div className="select">
                                                    <select>
                                                        <option>Select gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <label className="label">Phone</label>
                                            <div className="control has-icons-right">
                                                <input
                                                    name="phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="input"
                                                    type="input"
                                                    placeholder="6 71..."/>
                                                {errors.phone && touched.phone && (
                                                    <span className="icon is-small is-right">
                                                        <i className="fas fa-exclamation-circle"/>
                                                    </span>
                                                )}
                                                {
                                                    !errors.phone && touched.phone && (
                                                        <span className="icon is-small is-right"
                                                              style={{color: 'green'}}>
                                                        <i className="fas fa-check"/>
                                                    </span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">City</label>
                                    <div className="control has-icons-right">
                                        <input
                                            name="city"
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="input"
                                            type="text"
                                            placeholder="Douala, Cameroon"/>
                                        {errors.city && touched.city && (
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-exclamation-circle"/>
                                            </span>
                                        )}
                                        {
                                            !errors.city && touched.city && (
                                                <span className="icon is-small is-right" style={{color: 'green'}}>
                                                <i className="fas fa-check"/>
                                            </span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Town</label>
                                    <div className="control has-icons-right">
                                        <input
                                            name="town"
                                            value={values.town}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="input" type="text"
                                            placeholder="Douala, Akwa"
                                        />
                                        {errors.town && touched.town && (
                                            <span className="icon is-small is-right">
                                                <i className="fas fa-exclamation-circle"/>
                                            </span>
                                        )}
                                        {
                                            !errors.town && touched.town && (
                                                <span className="icon is-small is-right" style={{color: 'green'}}>
                                                <i className="fas fa-check"/>
                                            </span>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button
                                            className="button is-link is-light"
                                            type="submit"
                                            disabled={!isValid}
                                        >Register
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

export default CRSRegister
