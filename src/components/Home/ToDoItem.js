import React from "react";

const ToDoItem = ({ item }) => {
    return (
        <div>
            <p>{item.title}</p>

            <p>{item?.description}</p>
        </div>
    );
};

export default ToDoItem;
