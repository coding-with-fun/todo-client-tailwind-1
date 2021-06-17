import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AuthenticatedRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/profile" component={ProfileScreen} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AuthenticatedRouter;
