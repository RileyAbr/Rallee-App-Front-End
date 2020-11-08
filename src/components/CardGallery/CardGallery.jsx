import React from "react";
import PlayerCard from "../PlayerCard";
import "./CardGallery.scss";

const CardGallery = (props) => {
    return (
        <div className="card-gallery">
            {" "}
            {props.players.map((player) => {
                return (
                    <PlayerCard
                        key={player.id}
                        game={player.game}
                        gamelogo={player.gamelogo}
                        pic={player.pic}
                        username={player.username}
                        name={player.name}
                        comp={player.comp}
                        zone={player.zone}
                        bio={player.bio}
                        roles={player.roles}
                        rank={player.rank}
                        rankmedal={player.rankmedal}
                        languages={player.languages}
                        timezone={player.timezone}
                        firstName={player.firstName}
                    />
                );
            })}
        </div>
    );
};

export default CardGallery;
