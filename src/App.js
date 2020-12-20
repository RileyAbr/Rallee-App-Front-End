import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Message from "./components/Message";

function App() {
    return (
        <>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <AuthRoute exact={true} path="/" component={Home} />
                <AuthRoute path="/profile" component={Profile} />
                <AuthRoute path="/message" component={Message} />
                <AuthRoute component={Home} />
            </Switch>
        </>
    );
}

export default App;
