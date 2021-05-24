import React, { useReducer } from "react";
import {v4 as uuid} from "uuid";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    border: none;
    font-size: 1em;
    margin: 0.4em;
    background: #3f3fe1;
    border-radius: 4px;
    padding: .75em 1.25em;
    color: #fff;
    vertical-align: middle;
    transition: all 200ms ease;
    :hover {
        background-color: #161688;
    }
`

const Input = styled.input`
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5em;
    font-size: initial;
    height: 3rem;
    border-radius: 4px;
    vertical-align: middle;


`

const Form = styled.form `
    padding: 1.1rem 0 1.1rem;
`

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
        const newTodo = { id: uuid(), task: userInput.task, completed: false };
        createTodo(newTodo);
        // sets the task with an empty string again
        setUserInput({ task: "" });
    };

    // controlled form
    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text"
                placeholder="" 
                id="task"
                // value changes when handleChange updates the state
                value={userInput.task}
                // runs handleChange everytime the input is changed
                onChange={handleChange}
                name="task"
            />
            <Button>Add Todo</Button>
        </Form>
    );
}

export default NewTodoForm;