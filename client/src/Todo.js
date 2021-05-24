import React, { useState } from "react";

function Todo({ todo, remove, update, toggleStatus }) {
    
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    // handles the onClick event for todo removal
    const handleRemove = (evt) => {
        remove(evt.target.id);
    };

    // sets the opposite state for isEditing which toggles the form
    const toggleForm = () => {
        setIsEditing(!isEditing);
    };

    // handles the update onSubmit and passes it up to TodoList
    const handleUpdate = (evt) => {
        // prevent page from reloading
        evt.preventDefault();
        update(todo.id, task);
        toggleForm();
    };

    // handles the onChange event of the task value
        const handleChange = (evt) => {
        setTask(evt.target.value);
    };

    // handles the toggle event for the id
    const handleToggle = (evt) => {
        toggleStatus(evt.target.id);
    };

    let result;
    // conditional logic to determine if the user is editing
    if (isEditing) {
      result = (
        <div>
            <form onSubmit={handleUpdate}>
            <input onChange={handleChange} value={task} type="text" />
            <button>Save</button>
            </form>
        </div>
      );
    } else {
        result = (
            <div>
                <li
                    id={todo.id}
                    className={todo.status ? "active" : ""}
                    onClick={handleToggle}
                >
                    {todo.task}
                </li>
                <button onClick={toggleForm}>
                    <i className="fas fa-pen" />
                </button>
                <button onClick={handleRemove}>
                    <i id={todo.id} className="fas fa-trash" />
                </button>
            </div>
        );
    }
    return result;
}

export default Todo;