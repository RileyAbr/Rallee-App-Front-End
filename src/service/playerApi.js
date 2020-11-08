import mockPlayers from "../mocks/mockplayers.json";

import { filterArray } from "./utils";

class PlayerApi {
    constructor() {
        this.mockPlayers = mockPlayers;
    }

    getPlayerByID(playerID) {
        return this.mockPlayers.find((player) => player.id === playerID);
    }

    getPlayerByEmail(playerEmail) {
        return this.mockPlayers.find((player) => player.email === playerEmail);
    }

    getAllPlayers() {
        return this.mockPlayers;
    }

    getAllPlayersFilters(filters) {
        return this.mockPlayers.filter((player) => {
            return true;
        });
    }

    getPlayersByLanguages(filterLanguages) {
        return this.mockPlayers.filter((player) =>
            player.languages.some(
                (playerLanguage) => filterLanguages.indexOf(playerLanguage) >= 0
            )
        );
    }

    getPlayersByTimezone(filterTimezone) {
        return this.mockPlayers.filter(
            (player) => player.timezone === filterTimezone
        );
    }

    getPlayersByGame(filterGame) {
        return this.mockPlayers.filter((player) =>
            player.games.some((game) => game.game === filterGame)
        );
    }

    getPlayersByCompStatus(filterCompStatus) {
        return this.mockPlayers.filter((player) =>
            player.games.some((game) => game.comp === filterCompStatus)
        );
    }

    getAllGames() {
        let gameProfiles = [];

        this.mockPlayers.forEach((player) => {
            player.games.forEach((game) => {
                const gameProfile = Object.assign({}, player, game);
                gameProfiles.push(gameProfile);
            });
        });

        return gameProfiles;
    }

    getAllFilteredGames(filters) {
        const allGames = this.getAllGames();

        if (!filters) {
            return allGames;
        }

        return filterArray(allGames, filters);
    }
}

export default PlayerApi;
