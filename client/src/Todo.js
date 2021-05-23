import React, { useState } from "react";

function Todo({ todo }) {

    const task = useState(todo.task);

    return (
        <div>
            <li>
                {todo.task}
            </li>
            <button>
                <i className="fas fa-pen" />
            </button>
            <button>
                <i className="fas fa-trash" />
            </button>
        </div>
    )
}

export default Todo;