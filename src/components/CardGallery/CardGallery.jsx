import React from "react";
import PlayerCard from "../PlayerCard";
import MockPlayers from "./mockplayers.json";
import "./CardGallery.scss";

const CardGallery = () => {
    return (
        <div className="card-gallery">
            {" "}
            {MockPlayers.map((player, i) => {
                return (
                    <PlayerCard
                        key={i}
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
                    />
                );
            })}
        </div>
    );
};

export default CardGallery;
