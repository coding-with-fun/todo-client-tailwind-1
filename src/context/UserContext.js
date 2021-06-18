import React, { createContext, useState } from "react";
import { addToDo, deleteToDo, updateToDo } from "./todoOperations";
import { userAuthentication } from "./userAuthentication";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const userToken = localStorage.getItem("user-token");

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(
        Boolean(userToken)
    );
    const [todoList, setTodoList] = useState([]);

    const handleUserAuthentication = (token) => {
        userAuthentication(token, setIsUserAuthenticated);
    };

    const handleAddToDo = (data) => {
        addToDo(data, todoList, setTodoList);
    };

    const handleDeleteToDo = (index) => {
        deleteToDo(index, todoList, setTodoList);
    };

    const handleUpdateToDo = (data, index) => {
        updateToDo(data, index, todoList, setTodoList);
    };

    return (
        <UserContext.Provider
            value={{
                isUserAuthenticated,
                todoList,

                handleUserAuthentication,
                handleAddToDo,
                handleDeleteToDo,
                handleUpdateToDo,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
