import React from 'react'

const CRSLogin = () => {
    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-half">
                    <h1 className="is-size-4">CRS | Login</h1>
                    <form>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="username"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input className="input" type="password" placeholder="password"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button s-link is-light">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CRSLogin
