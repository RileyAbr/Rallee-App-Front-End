import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import "./PersonalProfile.scss";

function PersonalProfile(props) {
    const history = useHistory();

    const initialValues = {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        bio: props.bio
    };

    const onSubmit = () => {
        // TODO: Post to backend
        history.push("/");
    };

    const validationSchema = yup.object({
        firstName: yup
            .string()
            .min(1, "Please enter your first name")
            .required("Please enter your first name"),
        lastName: yup
            .string()
            .min(1, "Please enter your last name")
            .required("Please enter your last name"),
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter your email"),
        bio: yup
            .string()
            .min(1, "Please enter a bio")
            .required("Please enter a bio")
    });

    return (
        <Formik {...{ initialValues, validationSchema, onSubmit }}>
            {({ handleSubmit, getFieldProps, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formLoginFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder=""
                                {...getFieldProps("firstName")}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLoginLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder=""
                                {...getFieldProps("lastName")}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            {...getFieldProps("email")}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLoginBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder=""
                            {...getFieldProps("bio")}
                            isInvalid={!!errors.bio}
                            rows={4}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.bio}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Languages</Form.Label>
                        <div style={{ display: "flex", flexFlow: "row wrap" }}>
                            {[
                                "English",
                                "Mandarin",
                                "Hindi",
                                "French",
                                "Spanish",
                                "Arabic"
                            ].map((language) => (
                                <div key={language} className="m-3">
                                    <Form.Check
                                        custom
                                        type="checkbox"
                                        id={`checkbox-${language}`}
                                        label={language}
                                    />
                                </div>
                            ))}
                        </div>
                    </Form.Group>

                    <Button
                        variant="success"
                        type="submit"
                        block
                        style={{
                            display: "block",
                            margin: "0 auto"
                        }}
                    >
                        Update
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default PersonalProfile;
