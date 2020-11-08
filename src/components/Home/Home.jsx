import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.scss";

import ContentPage from "../ContentPage";
import CardGallery from "../CardGallery";
import FilterBar from "../FilterBar";

import PlayerApi from "../../service/playerApi";

function Home() {
    const playerApi = new PlayerApi();

    const [galleryPlayers, setGalleryPlayers] = useState(
        playerApi.getAllGames()
    );

    return (
        <ContentPage>
            <Container fluid>
                <Row className="home-content">
                    <Col className="home-cards-wrapper">
                        <CardGallery players={galleryPlayers} />
                    </Col>
                    <Col className="home-controls-wrapper" xl="3">
                        <FilterBar />
                    </Col>
                </Row>
            </Container>
        </ContentPage>
    );
}

export default Home;
