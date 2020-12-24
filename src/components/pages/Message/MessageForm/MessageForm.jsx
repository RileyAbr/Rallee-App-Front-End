import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import EdgedCardFormLarge from "../../EdgedCardFormLarge";
import FormDivider from "../../FormDivider";

function MessageForm() {
    const history = useHistory();

    const initialValues = {
        subject: "Want to form a team?",
        body: ""
    };

    const onSubmit = () => {
        // TODO: Post to backend
        history.push("/inbox");
    };

    const validationSchema = yup.object({
        subject: yup
            .string()
            .min(1, "Please enter a message subject")
            .required("Please enter a message subject"),
        body: yup
            .string()
            .min(1, "Please enter a message description")
            .required("Please enter a message description")
    });

    return (
        <EdgedCardFormLarge>
            <h2>Recruit an Ally</h2>

            <FormDivider />

            <Formik {...{ initialValues, validationSchema, onSubmit }}>
                {({ handleSubmit, getFieldProps, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formMessageSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder=""
                                {...getFieldProps("subject")}
                                isInvalid={!!errors.subject}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.subject}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessageBody">
                            <Form.Label>Message Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                {...getFieldProps("body")}
                                isInvalid={!!errors.body}
                                rows={10}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.body}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            variant="secondary"
                            type="submit"
                            style={{
                                display: "block",
                                margin: "0 auto"
                            }}
                        >
                            Send Message
                        </Button>
                    </Form>
                )}
            </Formik>

            <FormDivider />
        </EdgedCardFormLarge>
    );
}

export default MessageForm;
