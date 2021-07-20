import React from 'react'

const CRSRegister = () => {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-half">
                    <h1 className="is-size-4">CRS | Register</h1>
                    <form>
                        <div className="field">
                            <label className="label">First name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your first name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Last name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your last name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="name@host.com"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="columns">
                                <div className="column">
                                    <label className="label">Gender</label>
                                    <div className="control">
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
                                    <div className="control">
                                        <input className="input" type="input" placeholder="6 71..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">City</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Douala, Cameroon"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Town</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Douala, Akwa"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-link is-light">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}

export default CRSRegister
