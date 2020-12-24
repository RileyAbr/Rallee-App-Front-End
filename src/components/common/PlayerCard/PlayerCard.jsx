import React, { useState } from "react";
import { Card, Image, Button, Modal } from "react-bootstrap";
import "./PlayerCard.scss";
import EdgedCard from "../EdgedCard";
import "../FilterBar/TimeZones.json";

const PlayerCard = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button
                variant="link"
                style={{
                    outline: "none",
                    boxShadow: "none"
                }}
                className="card-selector"
                onClick={handleShow}
            >
                <EdgedCard width="18rem" growOnHover="true">
                    <Card.Img className="card-image" src={`${props.pic}`} />
                    <Card.ImgOverlay>
                        <Card.Body>
                            <div>
                                <Card.Title
                                    style={{
                                        fontSize: "1.8rem",
                                        fontFamily:
                                            "'Saira Stencil One', sans-serif",
                                        textAlign: "left"
                                    }}
                                >
                                    {`${props.username}`}{" "}
                                    <Image
                                        className="game-logo"
                                        src={`${props.gamelogo}`}
                                    />{" "}
                                </Card.Title>
                                <Card.Text className="bio">{`${props.bio}`}</Card.Text>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexFlow: "row nowrap",
                                    justifyContent: "space-between"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        justifyContent: "flex-end",
                                        alignItems: "flex-start"
                                    }}
                                >
                                    {props.roles &&
                                        props.roles.map((role, i) => {
                                            return <div key={i}>{role}</div>;
                                        })}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        justifyContent: "flex-end",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {`${props.rank}`}
                                    <Image
                                        className="rank-medal"
                                        src={`${props.rankmedal}`}
                                        width="75px"
                                    />{" "}
                                </div>
                            </div>
                        </Card.Body>
                    </Card.ImgOverlay>
                </EdgedCard>
            </Button>
            <Modal centered show={show} onHide={handleClose}>
                <Card.Img className="modal-image" src={`${props.pic}`} />
                <Card.ImgOverlay style={{ padding: "0.3rem" }}>
                    <Modal.Header className="card-header" closeButton>
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexFlow: "row nowrap",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "3rem",
                                    fontFamily:
                                        "'Saira Stencil One', sans-serif"
                                }}
                            >
                                {`${props.username}`}
                            </span>
                            <Image
                                style={{
                                    height: "4rem"
                                }}
                                src={`${props.gamelogo}`}
                            />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            {/* <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div
                                style={{
                                    fontSize: "3rem",
                                    fontFamily:
                                        "'Saira Stencil One', sans-serif",
                                    textAlign: "left"
                                }}
                            >
                                {`${props.username}`}{" "}
                                <Image
                                    style={{
                                        paddingRight: "20px",
                                        paddingTop: "5px",
                                        height: "4rem",
                                        float: "right"
                                    }}
                                    src={`${props.gamelogo}`}
                                />
                            </div> */}
                            <div
                                style={{
                                    fontSize: "1.2rem"
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    {props.firstName}
                                </span>{" "}
                                -{" "}
                                <span
                                    style={{
                                        fontStyle: "italic"
                                    }}
                                >
                                    {props.comp}
                                </span>
                            </div>
                            <div>{`${props.bio}`}</div>
                            <div
                                style={{
                                    paddingTop: "5%",
                                    display: "flex",
                                    flexFlow: "row nowrap",
                                    justifyContent: "space-between"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        alignItems: "flex-start"
                                    }}
                                >
                                    {" "}
                                    <span
                                        style={{
                                            fontWeight: "bold"
                                        }}
                                    >
                                        I play ...
                                    </span>
                                    {props.roles &&
                                        props.roles.map((role, i) => {
                                            return <div key={i}>{role}</div>;
                                        })}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        fontWeight: "bold",
                                        textAlign: "center"
                                    }}
                                >
                                    {`${props.rank}`}
                                    <Image
                                        className="rank-medal"
                                        src={`${props.rankmedal}`}
                                        width="100px"
                                    />{" "}
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column nowrap",
                                        alignItems: "flex-start"
                                    }}
                                >
                                    {" "}
                                    <span
                                        style={{
                                            fontWeight: "bold"
                                        }}
                                    >
                                        I speak ...
                                    </span>
                                    {props.languages &&
                                        props.languages.map((language, i) => {
                                            return (
                                                <div key={i}>{language}</div>
                                            );
                                        })}
                                </div>
                            </div>
                            <div
                                style={{
                                    paddingTop: "5%"
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    Time Zone:
                                </span>{" "}
                                {props.timezone}{" "}
                            </div>
                        </div>
                        <div>
                            <Button
                                className="button-font"
                                variant="warning"
                                size="lg"
                                block
                                onClick={handleClose}
                            >
                                Message Player
                            </Button>
                        </div>
                    </Modal.Body>
                </Card.ImgOverlay>
            </Modal>
        </>
    );
};

export default PlayerCard;
