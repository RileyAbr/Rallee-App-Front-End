import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Message from "./components/Message";

import { Route } from "react-router-dom";

const routes = [
    {
        render: (props) => (
            <Route path="/profile">
                <Profile verifiedPlayer={props} />
            </Route>
        )
    },
    {
        render: (props) => (
            <Route path="/message">
                <Message verifiedPlayer={props} />
            </Route>
        )
    },
    {
        render: (props) => (
            <Route path="/" exact>
                <Home verifiedPlayer={props} />
            </Route>
        )
    }
];

const loginRoutes = [
    { path: "/login", render: (props) => <Login {...props} /> },
    { path: "/signup", render: (props) => <SignUp {...props} /> }
];

export { loginRoutes };

export default routes;
