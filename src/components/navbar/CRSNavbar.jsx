import React from 'react'
import {NavLink} from "react-router-dom";

const CRSNavbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    <h1 className="title is-size-3">CRS</h1>
                    <h1 className="title is-size-7"> | Impalink</h1>
                </NavLink>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink to="/" className="navbar-item">
                        Home
                    </NavLink>

                    <NavLink to='/services' className="navbar-item">
                        Services
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <NavLink to="/about" className="navbar-item">
                        About
                    </NavLink>
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink to="/register" className="button is-primary">
                                <strong>Sign up</strong>
                            </NavLink>
                            <NavLink to="/login" className="button is-light">
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default CRSNavbar
