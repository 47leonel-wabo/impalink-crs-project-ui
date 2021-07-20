import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import CRSNavbar from "./components/navbar/CRSNavbar";
import CRSHome from "./components/home/CRSHome";
import CRSLogin from "./components/forms/login/CRSLogin";
import CRSRegister from "./components/forms/register/CRSRegister";
import CRSAbout from "./components/about/CRSAbout";
import CRSServices from "./components/services/CRSServices";
import CRSDashboard from "./components/dashboard/CRSDashboard";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <CRSNavbar/>
                <Switch>
                    <Route exact path="/" component={CRSHome}/>
                    <Route path="/login" component={CRSLogin}/>
                    <Route path="/register" component={CRSRegister}/>
                    <Route path="/about" component={CRSAbout}/>
                    <Route path="/services" component={CRSServices}/>
                    <Route path="/dashboard" component={CRSDashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
