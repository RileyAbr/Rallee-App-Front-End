import React from "react";

import EdgedCard from "../EdgedCard";

const EdgedCardFormLarge = (props) => {
    return (
        <EdgedCard width="60%">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        maxWidth: "1100px",
                        width: "100%",
                        padding: "1rem 4rem"
                    }}
                >
                    {props.children}
                </div>
            </div>
        </EdgedCard>
    );
};

export default EdgedCardFormLarge;
