import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.li`
    display: flex;
    margin: 0 -3rem 4px;
    padding: 1.1rem 3rem;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
`

const ButtonWrapper = styled.div`
    display: flex;
`

const SaveButton = styled.button`
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

const IconButton = styled.button`
    cursor: pointer;
    border: none;
    font-size: 1em;
    margin: 0.4em;
    background: none;
    color: #fff;
`

const Input = styled.input`
    flex-grow: 1;
    border: none;
    background: #f7f1f1;
    padding: 0 1.5em;
    font-size: initial;
    height: 3rem;
    vertical-align: middle;
    border-radius: 4px;
`

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
        <Wrapper>
            <form onSubmit={handleUpdate}>
                <Input onChange={handleChange} value={task} type="text" />
                <SaveButton>Save</SaveButton>
            </form>
        </Wrapper>
      );
    } else {
        result = (
            <Wrapper>
                <p
                    id={todo.id}
                    className={todo.status ? "inactive" : "active"}
                    onClick={handleToggle}
                >
                    {todo.task}
                </p>
                <ButtonWrapper>
                    <IconButton onClick={toggleForm}>
                        <i className="fas fa-pen" />
                    </IconButton>
                    <IconButton onClick={handleRemove}>
                        <i id={todo.id} className="fas fa-trash" />
                    </IconButton>
                </ButtonWrapper>
            </Wrapper>
        );
    }
    return result;
}

export default Todo;