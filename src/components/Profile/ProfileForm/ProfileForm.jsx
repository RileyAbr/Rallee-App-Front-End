import React from "react";

import EdgedCardFormLarge from "../../EdgedCardFormLarge";
import FormDivider from "../../FormDivider";
import PersonalProfile from "./PersonalProfile";
import GameProfiles from "./GameProfiles";

function ProfileForm(props) {
    return (
        <EdgedCardFormLarge>
            <h2>Hello {props.verifiedPlayer.firstName}, GLHF!</h2>

            <FormDivider />

            <h3>Personal Profile</h3>
            <PersonalProfile {...props.verifiedPlayer} />

            <FormDivider />

            <h3>Game Profiles</h3>
            <GameProfiles />
        </EdgedCardFormLarge>
    );
}

export default ProfileForm;
