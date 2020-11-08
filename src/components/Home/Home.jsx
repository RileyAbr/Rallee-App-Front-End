import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.scss";

import ContentPage from "../ContentPage";
import CardGallery from "../CardGallery";
import FilterBar from "../FilterBar";

import PlayerApi from "../../service/playerApi";

function Home() {
    const playerApi = new PlayerApi();

    const [filter, setFilter] = useState(0);

    let exampleFilter = { game: "League of Legends", language: "Spanish" };

    const filters = {
        game: "",
        language: "",
        maxRank: "",
        minRank: "",
        timezone: "",
        comp: ""
    };

    const [galleryPlayers] = useState(playerApi.getAllFilteredGames(filters));

    const handleChange = () => {
        setFilter(filters);
    };
    return (
        <ContentPage>
            <Container fluid>
                <Row className="home-content">
                    <Col className="home-cards-wrapper">
                        <CardGallery players={galleryPlayers} />
                    </Col>
                    <Col className="home-controls-wrapper" xl="3">
                        <FilterBar
                        // onChange={handleChange}
                        // games={filters.game}
                        // language={filters.language}
                        // maxRank={filters.maxRank}
                        // minRank={filters.minRank}
                        // timezone={filters.timezone}
                        // comp={filters.comp}
                        />
                    </Col>
                </Row>
            </Container>
        </ContentPage>
    );
}

export default Home;
