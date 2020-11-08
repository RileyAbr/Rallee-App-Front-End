import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes, { loginRoutes } from "./routes";

import PlayerApi from "./service/playerApi";

function App() {
    const playerApi = new PlayerApi();
    const [verifiedPlayer] = useState(
        playerApi.getPlayerByEmail("player@lol.com")
    );

    return (
        <>
            <Switch>
                {loginRoutes.map((route, i) => {
                    return (
                        <Route
                            key={i} //onLogin={handleLogin}
                            {...route}
                        />
                    );
                })}

                {routes.map((route, i) => {
                    return route.render(verifiedPlayer);
                })}

                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}

export default App;
