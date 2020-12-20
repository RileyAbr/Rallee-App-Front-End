import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";

import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Message from "./components/Message";

const NewRoutes = () => {
    return (
        <>
            <Route path="/login" component={Login}></Route>
            <AuthRoute exact={true} path="/" component={Home} />
            <AuthRoute path="/profile" component={Profile} />
            <AuthRoute path="/message" component={Message} />
            <AuthRoute component={Home} />
        </>
    );
};

export default NewRoutes;
