import React from "react";

import EdgedCardFormLarge from "../../EdgedCardFormLarge";
import FormDivider from "../../FormDivider";
import PersonalProfile from "./PersonalProfile";
import GameProfiles from "./GameProfiles";

function ProfileForm() {
    return (
        <EdgedCardFormLarge>
            <h2>$$$Username</h2>

            <FormDivider />

            <h3>Personal Profile</h3>
            <PersonalProfile />

            <FormDivider />

            <h3>Game Profiles</h3>
            <GameProfiles />
        </EdgedCardFormLarge>
    );
}

export default ProfileForm;
