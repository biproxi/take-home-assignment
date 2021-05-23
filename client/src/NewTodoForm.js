import React, { useReducer } from "react";

function NewTodoForm() {

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

    // controlled form
    return (
        <form>
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
        </form>
    );
}

export default NewTodoForm;