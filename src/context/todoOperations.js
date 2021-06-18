export const addToDo = (data, todoList, setTodoList) => {
    const todoListLocal = [...todoList, data];
    setTodoList(todoListLocal);
};

export const deleteToDo = (index, todoList, setTodoList) => {
    const todoListLocal = [...todoList];
    todoListLocal.splice(index, 1);
    setTodoList(todoListLocal);
};

export const updateToDo = (data, index, todoList, setTodoList) => {
    const todoListLocal = [...todoList];
    todoList[index] = data;
    setTodoList(todoListLocal);
};
