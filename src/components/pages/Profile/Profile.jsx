import React from "react";

import ContentPage from "../../common/ContentPage";
import ProfileForm from "./ProfileForm";

function Profile(props) {
    return (
        <ContentPage>
            <ProfileForm verifiedPlayer={props.verifiedPlayer} />
        </ContentPage>
    );
}

export default Profile;
