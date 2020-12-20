import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Message from "./components/Message";

import { Route } from "react-router-dom";

const routes = [
    {
        render: (props) => (
            <Route key={props.i} path="/profile">
                <Profile verifiedPlayer={props.verifiedPlayer} />
            </Route>
        )
    },
    {
        render: (props) => (
            <Route key={props.i} path="/message">
                <Message verifiedPlayer={props.verifiedPlayer} />
            </Route>
        )
    },
    {
        render: (props) => (
            <Route key={props.i} path="/" exact>
                <Home verifiedPlayer={props.verifiedPlayer} />
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
