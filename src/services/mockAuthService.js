export const logInPlayer = () => {
    localStorage.setItem("token", "mockAuthToken");
};

export const logOutPlayer = () => {
    localStorage.removeItem("token");
};
