import React from "react";
import { Redirect } from "react-router-dom";

const AuthRoute = ({ component }) => {
    const Component = component;
    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? (
        <Component />
    ) : (
        <Redirect to={{ pathname: "login" }} />
    );
};

export default AuthRoute;
