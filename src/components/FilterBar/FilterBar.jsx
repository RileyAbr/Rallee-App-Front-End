import React, { useState } from "react";
import "./FilterBar.scss";
import TimeZones from "./TimeZones.json";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import lolRanks from "../../mocks/mockLolRanks.json";
import dotaRanks from "../../mocks/mockDotaRanks.json";
import valorantRanks from "../../mocks/mockValorantRanks.json";

const gameToRanks = {
    "League of Legends": lolRanks,
    Dota2: dotaRanks,
    VALORANT: valorantRanks
};

const FilterBar = (props) => {
    const [formValues, setFormValues] = useState({});

    const initialValues = {
        game: "",
        language: "",
        rank: "",
        timezone: "",
        comp: ""
    };

    const validationSchema = yup.object({
        game: yup.string().required("Game is required"),
        language: yup.string().required("Language is required"),
        rank: yup.string().required("Rank is required"),
        timezone: yup.string().required("Time Zone is required"),
        comp: yup.string().required("Comp is required")
    });

    const onFormChange = (values) => {
        if (values !== formValues) {
            setFormValues(values);
            props.formChangeCallback(values);
        }
    };

    return (
        <Formik {...{ initialValues, validationSchema }}>
            {({ handleChange, getFieldProps, values }) => (
                <Form noValidate onChange={onFormChange(values)}>
                    <div className="drop-shadow">
                        <aside className="bar">
                            <div className="header">Search Filters</div>
                            <Form.Group controlId="gameFilter">
                                <Form.Label>Game</Form.Label>
                                <Form.Control
                                    as="select"
                                    {...getFieldProps("game")}
                                >
                                    <option value="">All Games</option>
                                    <option value="League of Legends">
                                        League of Legends
                                    </option>
                                    <option value="Dota2">Dota 2</option>
                                    <option value="VALORANT">Valorant</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="languageFilter">
                                <Form.Label>Language</Form.Label>
                                <Form.Control
                                    as="select"
                                    {...getFieldProps("language")}
                                >
                                    <option value="">All Languages</option>
                                    <option value="English">English</option>
                                    <option value="Mandarin">
                                        Mandarin Chinese
                                    </option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                    <option value="Arabic">Arabic</option>
                                </Form.Control>
                            </Form.Group>
                            {formValues.game && (
                                <Form.Group controlId="rankFilter">
                                    <Form.Label>Rank</Form.Label>
                                    <Form.Control
                                        as="select"
                                        {...getFieldProps("rank")}
                                    >
                                        <option value="">All Ranks</option>
                                        {gameToRanks[formValues.game].map(
                                            (rank) => {
                                                return (
                                                    <option value={rank}>
                                                        {rank}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            )}
                            <Form.Group controlId="timezoneFilter">
                                <Form.Label>Time Zone</Form.Label>
                                <Form.Control
                                    as="select"
                                    {...getFieldProps("timezone")}
                                >
                                    {TimeZones.tzInts.map((zone, i) => {
                                        return (
                                            <option key={i} value={zone.value}>
                                                {zone.label}
                                            </option>
                                        );
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="compFilter">
                                <Form.Label>Competitive or Casual</Form.Label>
                                <Form.Control
                                    as="select"
                                    {...getFieldProps("comp")}
                                >
                                    <option value="">All</option>
                                    <option value="Competitive">
                                        Competitive
                                    </option>
                                    <option value="Casual">Casual</option>
                                </Form.Control>
                            </Form.Group>
                        </aside>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FilterBar;
