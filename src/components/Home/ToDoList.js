import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    return (
        <div className="container mx-auto w-3/4 lg:w-1/3 sm:w-1/2">
            <ToDoItem />
        </div>
    );
};

export default ToDoList;
