import React, { useState } from "react";

import EdgedCardFormLarge from "../../EdgedCardFormLarge";
import FormDivider from "../../FormDivider";
import PersonalProfile from "./PersonalProfile";
import GameProfiles from "./GameProfiles";

import PlayerApi from "../../../services/playerApi";

function ProfileForm(props) {
    const playerApi = new PlayerApi();
    const [verifiedPlayer] = useState(
        playerApi.getPlayerByEmail("player@lol.com")
    );

    return (
        <EdgedCardFormLarge>
            <h2>Hello {verifiedPlayer.firstName}, GLHF!</h2>

            <FormDivider />

            <h3>Personal Profile</h3>
            <PersonalProfile {...verifiedPlayer} />

            <FormDivider />

            <h3>Game Profiles</h3>
            <GameProfiles {...verifiedPlayer} />
        </EdgedCardFormLarge>
    );
}

export default ProfileForm;
