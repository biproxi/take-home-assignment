import React, { useReducer } from "react";

function NewTodoForm({createTodo}) {

    // setting the initial value for task
    // not sure why we need to use useReducer instead of useState
    const  [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            task: ""
        }
    );

    // updates the state
    const handleChange = (evt) => {
        setUserInput({ [evt.target.name]: evt.target.value });
    };

    // handles the form submisssion
    const handleSubmit = (evt) => {
        // prevents the browser from reloading
        evt.preventDefault();
        const newTodo = { task: userInput.task, completed: false };
        createTodo(newTodo);
        // sets the task with an empty string again
        setUserInput({ task: "" });
    };

    // controlled form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo</label>
            <input 
                type="text"
                placeholder="New Todo" 
                id="task"
                // value changes when handleChange updates the state
                value={userInput.task}
                // runs handleChange everytime the input is changed
                onChange={handleChange}
                name="task"
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;