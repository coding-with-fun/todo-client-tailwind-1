import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthScreen from "../screens/AuthScreen";

const UnauthenticatedRouter = () => {
    return (
        <Switch>
            <Route exact path="/signin">
                <AuthScreen authFlag={0} />
            </Route>

            <Route exact path="/signup">
                <AuthScreen authFlag={1} />
            </Route>

            <Redirect to="/signin" />
        </Switch>
    );
};

export default UnauthenticatedRouter;
