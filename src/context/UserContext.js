import React, { createContext, useState } from "react";
import { userAuthentication } from "./userAuthentication";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userToken = localStorage.getItem("user-token");

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        Boolean(userToken)
    );

    const handleUserAuthentication = (token) => {
        userAuthentication(token, setIsUserAuthenticated);
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
