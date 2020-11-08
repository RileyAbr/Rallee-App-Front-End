import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Message from "./components/Message";

const routes = [
    { path: "/login", render: (props) => <Login {...props} /> },
    { path: "/signup", render: (props) => <SignUp {...props} /> },
    { path: "/profile", render: (props) => <Profile {...props} /> },
    { path: "/message", render: (props) => <Home {...props} /> },
    { path: "/", render: (props) => <Message {...props} /> }
];

export default routes;
