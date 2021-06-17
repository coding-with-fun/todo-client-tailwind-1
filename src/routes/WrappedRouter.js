import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AuthenticatedRouter from "./AuthenticatedRouter";
import UnauthenticatedRouter from "./UnauthenticatedRouter";

const WrappedRouter = () => {
    const { isUserAuthenticated } = useContext(UserContext);

    return isUserAuthenticated ? (
        <AuthenticatedRouter />
    ) : (
        <UnauthenticatedRouter />
    );
};

export default WrappedRouter;
