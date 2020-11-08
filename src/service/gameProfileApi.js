import mockGameProfiles from "../mocks/mockPlayers.json";

class GameProfileApi {
    constructor() {
        this.mockGameProfiles = mockGameProfiles;
    }

    // getAllPlayers() {
    //     return this.mockPlayers;
    // }

    // getPlayersByLanguages(filterLanguages) {
    //     return this.mockPlayers.filter((player) =>
    //         player.languages.some(
    //             (playerLanguage) => filterLanguages.indexOf(playerLanguage) >= 0
    //         )
    //     );
    // }

    // getPlayersByTimezone(filterTimezone) {
    //     return this.mockPlayers.filter(
    //         (player) => player.timezone === filterTimezone
    //     );
    // }
}

export default GameProfileApi;
