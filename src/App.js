import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";

import PlayerApi from "./service/playerApi";

function App() {
    const playerApi = new PlayerApi();
    const [verifiedPlayer, setVerifiedPlayer] = useState(
        playerApi.getPlayerByEmail("player@lol.com")
    );

    // const handleLogin = () => { };

    return (
        <>
            <Switch>
                {/* Redirect anything that is more than a single url param */}
                {routes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            verifiedPlayer={verifiedPlayer}
                            {...route}
                        />
                    );
                })}
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
