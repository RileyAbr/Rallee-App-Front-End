export const logInPlayer = () => {
    localStorage.setItem("token", "mockAuthToken");
    console.log("%cMOCK AUTH: %cUser logged IN", "font-weight: bold");
};

export const logOutPlayer = () => {
    localStorage.removeItem("token");
    console.log("%cMOCK AUTH: %cUser logged OUT", "font-weight: bold");
};
