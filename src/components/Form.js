import React, { useEffect } from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    // Helper function to edit item, save new info
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    // Utilized useEffect to grab the title of the item for editing
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    // Pass information to state to add to list, take into consideration "edit" operation
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);      
        setInput("");
        } else {
           updateTodo(input, editTodo.id, editTodo.completed) 
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="What is your next task?" 
                className="task-input" 
                value={input}
                required 
                onChange = {onInputChange}
            />
            <button className="button-add" type="submit">
                {editTodo ? "OK" : "Add"}
            </button>
        </form>
    );
    
};

export default Form;