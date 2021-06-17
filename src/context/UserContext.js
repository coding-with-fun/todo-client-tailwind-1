import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userToken = localStorage.getItem("user-token");
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        Boolean(userToken)
    );

    const handleUserAuthentication = (token) => {
        if (token) {
            localStorage.setItem("user-token", token);
        } else {
            localStorage.removeItem("user-token");
        }

        setIsUserAuthenticated(Boolean(token));
    };

    return (
        <UserContext.Provider
            value={{
                isUserAuthenticated,

                handleUserAuthentication,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
