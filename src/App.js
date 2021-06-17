import React from "react";
import Body from "./Body";
import { UserProvider } from "./context/UserContext";

const App = () => {
    return (
        <UserProvider>
            <div className="select-none">
                <Body />
            </div>
        </UserProvider>
    );
};

export default App;
