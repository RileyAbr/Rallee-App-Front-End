import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";

import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Message from "./components/pages/Message";

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <AuthRoute exact={true} path="/" component={Home} />
                <AuthRoute path="/profile" component={Profile} />
                <AuthRoute path="/message" component={Message} />
                <AuthRoute component={Home} />
            </Switch>
        </>
    );
}

export default App;
