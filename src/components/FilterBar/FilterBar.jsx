import React from "react";
import "./FilterBar.scss";
import TimeZones from "./TimeZones.json";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const FilterBar = (props) => {
    const initialValues = {
        game: "",
        language: "",
        maxRank: "",
        minRank: "",
        timezone: "",
        comp: ""
    };

    const validationSchema = yup.object({
        game: yup.string().required("Game is required"),
        language: yup.string().required("Language is required"),
        maxRank: yup.string().required("Max Rank is required"),
        minRank: yup.string().required("Min Rank is required"),
        timezone: yup.string().required("Time Zone is required"),
        comp: yup.string().required("Comp is required")
    });

    const onChange = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    const validate = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Formik {...{ initialValues, validationSchema, onChange, validate }}>
            {({ handleChange, getFieldProps, values }) => (
                <Form noValidate onChange={handleChange}>
                    <div className="drop-shadow">
                        <aside className="bar">
                            <div className="header">Search Filters</div>
                            <Form.Group controlId="gameFilter">
                                <Form.Label>Game</Form.Label>
                                <Form.Control
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
                                    {...getFieldProps("game")}
                                >
                                    <option value="">All Games</option>
                                    <option value="lol">
                                        League of Legends
                                    </option>
                                    <option value="dota">Dota 2</option>
                                    <option value="val">Valorant</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="languageFilter">
                                <Form.Label>Language</Form.Label>
                                <Form.Control
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
                                    {...getFieldProps("language")}
                                >
                                    <option value="">All Languages</option>
                                    <option value="english">English</option>
                                    <option value="mandarin">
                                        Mandarin Chinese
                                    </option>
                                    <option value="hindi">Hindi</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                    <option value="arabic">Arabic</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="maxRankFilter">
                                <Form.Label>Max Rank</Form.Label>
                                <Form.Control
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
                                    {...getFieldProps("maxRank")}
                                >
                                    <option value="">All Ranks</option>
                                    <option value="immortal">Immortal</option>
                                    <option value="divine">Divine</option>
                                    <option value="ancient">Ancient</option>
                                    <option value="legend">Legend</option>
                                    <option value="archon">Archon</option>
                                    <option value="crusader">Crusader</option>
                                    <option value="guardian">Guardian</option>
                                    <option value="herald">Herald</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="minRankFilter">
                                <Form.Label>Min Rank</Form.Label>
                                <Form.Control
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
                                    {...getFieldProps("minRank")}
                                >
                                    <option value="">All Ranks</option>
                                    <option value="immortal">Immortal</option>
                                    <option value="divine">Divine</option>
                                    <option value="ancient">Ancient</option>
                                    <option value="legend">Legend</option>
                                    <option value="archon">Archon</option>
                                    <option value="crusader">Crusader</option>
                                    <option value="guardian">Guardian</option>
                                    <option value="herald">Herald</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="timezoneFilter">
                                <Form.Label>Time Zone</Form.Label>
                                <Form.Control
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
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
                                    //onChange={handleChange}
                                    as="select"
                                    //defaultValue=""
                                    {...getFieldProps("comp")}
                                >
                                    <option value="">All</option>
                                    <option value="competitive">
                                        Competitive
                                    </option>
                                    <option value="casual">Casual</option>
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
