import mockPlayers from "../mocks/mockplayers.json";

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
                gameProfiles.push(game);
            });
        });

        return gameProfiles;
    }
}

export default PlayerApi;
