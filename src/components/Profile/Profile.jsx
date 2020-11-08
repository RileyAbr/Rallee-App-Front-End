import React from "react";

import ContentPage from "../ContentPage";
import ProfileForm from "./ProfileForm";

function Profile(props) {
    return (
        <ContentPage>
            <ProfileForm verifiedPlayer={props.verifiedPlayer} />
        </ContentPage>
    );
}

export default Profile;
