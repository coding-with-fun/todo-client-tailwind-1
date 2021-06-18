export const userAuthentication = (token, setIsUserAuthenticated) => {
    if (token) {
        localStorage.setItem("user-token", token);
    } else {
        localStorage.removeItem("user-token");
    }

    setIsUserAuthenticated(Boolean(token));
};
