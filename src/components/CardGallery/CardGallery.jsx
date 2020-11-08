import React, { useState } from "react";
import PlayerCard from "../PlayerCard";
import "./CardGallery.scss";

import PlayerApi from "../../service/playerApi";

const CardGallery = () => {
    const playerApi = new PlayerApi();

    const [galleryPlayers, setGalleryPlayers] = useState(
        playerApi.getAllPlayers()
    );

    return (
        <div className="card-gallery">
            {" "}
            {galleryPlayers.map((player, i) => {
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
