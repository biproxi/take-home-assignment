import React, { useState } from "react";

function Todo({ todo, remove }) {

    // removes the todo from click event
    const handleRemove = (evt) => {
        remove(evt.target.id);
    };

    return (
        <div>
            <li>
                {todo.task}
            </li>
            <button>
                <i className="fas fa-pen" />
            </button>
            <button onClick={handleRemove}>
                <i id={todo.id} className="fas fa-trash" />
            </button>
        </div>
    )
}

export default Todo;