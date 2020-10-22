import React from "react";
import { Route, Switch } from "react-router-dom"
import App from "./App"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SignUpFail from "./SignupFail";

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signupsuccess" component={SignUp} />
            <Route path="/signupfail" component={SignUpFail} />
        </Switch>
    )
}