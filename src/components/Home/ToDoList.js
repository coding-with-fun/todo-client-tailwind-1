import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const { todoList } = useContext(UserContext);

    return (
        <div className="container mx-auto w-3/4 lg:w-1/3 sm:w-1/2">
            {todoList.map((item, index) => {
                return <ToDoItem item={item} key={index} />;
            })}
        </div>
    );
};

export default ToDoList;
