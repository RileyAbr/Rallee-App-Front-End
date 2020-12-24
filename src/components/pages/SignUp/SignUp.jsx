import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

import FormDivider from "../../common/FormDivider";

import blueTransparent from "../../../assets/blue_transparent.png";

function SignUp() {
    const history = useHistory();
    const initialValues = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        bio: ""
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
        password: yup
            .string()
            .required("Please enter a password")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Your password must 8 characters long and contain at least one letter and one number"
            ),
        passwordMatch: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <img
                        src={process.env.PUBLIC_URL + "/Logo/White_Rainbow.svg"}
                        alt="Rallee Logo"
                        style={{
                            display: "block",
                            margin: "1rem auto",
                            maxWidth: "650px",
                            width: "100%"
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={4} style={{ margin: "0 auto" }}>
                    <h1>Find your team!</h1>
                    <Formik {...{ initialValues, validationSchema, onSubmit }}>
                        {({ handleSubmit, getFieldProps, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Form.Group controlId="formLoginEmail">
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

                                <Form.Group controlId="formSignupLastName">
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

                                <Form.Group controlId="formSignupEmail">
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

                                <Form.Group controlId="formLoginEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        {...getFieldProps("password")}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formLoginEmail">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        {...getFieldProps("passwordMatch")}
                                        isInvalid={!!errors.passwordMatch}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.passwordMatch}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button
                                    variant="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    style={{
                                        display: "block",
                                        margin: "45px auto"
                                    }}
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <FormDivider />

                    <div className="login-options-wrapper">
                        <span>
                            Already have an acount?{" "}
                            <Link className="login-options-link" to="login">
                                Login
                            </Link>
                        </span>
                    </div>
                </Col>
            </Row>

            <img
                src={blueTransparent}
                alt=""
                loading="lazy"
                style={{
                    position: "fixed",
                    right: "0",
                    zIndex: "-1",
                    width: "25%",
                    bottom: "0",
                    margin: "1rem"
                }}
            />
        </Container>
    );
}

export default SignUp;
