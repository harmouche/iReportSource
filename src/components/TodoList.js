import React from "react";

const TodoList = ({todos, setTodos, setEditTodo, editTodo}) => {
    
    // Mark item as "Completed"
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }; 
    
    // Delete item by detaching the id number
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        if (editTodo?.id === id) {
        setEditTodo(null)};
    };

    // Edit item helper function
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id} >
                    <input 
                        type="text" 
                        value={todo.title} 
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()} 
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>     
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button> 
                        <button className="button-delete task-button">
                            <i className="fa fa-trash" onClick={() => handleDelete(todo)}></i>
                        </button>                    
                    </div>
                </li>
            )
            )}
        </div>
    );
};

export default TodoList;