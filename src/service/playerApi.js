import mockPlayers from "../mocks/mockPlayers.json";

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
}

export default PlayerApi;
