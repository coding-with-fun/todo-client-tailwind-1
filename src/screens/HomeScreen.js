import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React, { useState } from "react";
import AddToDoModal from "../components/Home/AddToDoModal";
import SearchToDo from "../components/Home/SearchToDo";
import ToDoList from "../components/Home/ToDoList";

const HomeScreen = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleToggleAddToDoModal = () => {
        setIsAddModalOpen(!isAddModalOpen);
    };

    return (
        <div>
            <SearchToDo />
            <ToDoList />

            <AddToDoModal
                handleToggleAddToDoModal={handleToggleAddToDoModal}
                isAddModalOpen={isAddModalOpen}
            />

            <div className="fixed bottom-16 right-2">
                <Fab
                    color="primary"
                    aria-label="add"
                    className="focus:outline-none"
                    onClick={handleToggleAddToDoModal}
                >
                    <AddIcon />
                </Fab>
            </div>
        </div>
    );
};

export default HomeScreen;
