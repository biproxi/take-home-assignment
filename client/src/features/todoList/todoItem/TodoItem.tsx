import React, { MouseEventHandler, useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Todo, TodoStatusEnum, updateTodo } from '../todoListSlice';
import styled, { StyledComponent } from "styled-components"
import { deleteTodo } from '../todoListSlice';
import { StyledTextBox } from './NewTodoItem';


interface TodoRowProps {
    todo: Todo,
    row: StyledComponent<"span", any, {}, never>
}

const TodoRowTop = styled.div`
    display: flex;
    flex-dirextion: row;
    justify-content: flex-start;
    gap: .2em;
    align-items: center;
`

const StatusMessage = styled.span`
    font-size: 16pt;
    padding-left: .4em;
`

export const StyledButton = styled.button<{ onClick?: MouseEventHandler }>`
    appearance: none;
    background: none;
    font-size: 32px;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: 2px solid rgba(112, 76, 182, 0.7);
    color: rgb(112, 76, 182);
    padding-bottom: 4px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: .2em;
    transition: all 0.15s;
  
    &:hover,
    &:focus {
        border: 2px solid rgba(112, 76, 182, 0.4);
    }
  
    &:active {
        background-color: rgba(112, 76, 182, 0.2);
    }
`

const Title = styled.label`
    margin: 0 0 0 0;
    padding-bottom: 0;

    &:hover {
        cursor: pointer;
    }
`

// Is passing a styled component as a prop preferable to import export? Or does keeping it in a separate file negate the point?
export function TodoItem(props: TodoRowProps) {
    const dispatch = useAppDispatch();
    const todo = props.todo
    const Row = props.row
    
    const [titleEditMode, toggleEditMode] = useState(false)
    const [unsavedTitle, setUnsavedTitle] = useState(todo.title);

    const handleStatusChange = (event: React.ChangeEvent) => {
        event.preventDefault()
        const updatedTodo = {
            ...todo,
            status: todo.status === TodoStatusEnum.Active ? TodoStatusEnum.Inactive : TodoStatusEnum.Active
        };
        dispatch(updateTodo(updatedTodo))
    }

    const handleDelete = (event: React.MouseEvent) => {
        dispatch(deleteTodo(todo))
    }

    const handleTodoUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const updatedTodo = {
            ...todo,
            title: unsavedTitle
         };
        dispatch(updateTodo(updatedTodo))
        toggleEditMode(!titleEditMode)
    }

    const isDone = todo.status === TodoStatusEnum.Active ? false : true;
    const statusMessage = isDone ? `Task completed ${(new Date(todo.lastUpdatedAt * 1000)).toLocaleString()}`
                                : `Task added ${(new Date(todo.createdAt * 1000)).toLocaleString()}`

    return (
        <Row>
            <TodoRowTop>
                <input type='checkbox' checked={isDone} onChange={handleStatusChange} />

                {
                    titleEditMode
                    ?
                    <form onSubmit={handleTodoUpdate}>
                        <StyledTextBox value={unsavedTitle} placeholder={todo.title} onChange={event => setUnsavedTitle(event.target.value)} />
                    </form>
                    :
                    <Title onClick={() => toggleEditMode(!titleEditMode)} style={isDone ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}}>
                        { todo.title }
                    </Title>
                }

            </TodoRowTop>

            <StyledButton onClick={handleDelete}>
                Delete
            </StyledButton>
            
            <StatusMessage>
                { statusMessage }
            </StatusMessage>
        </Row>
    );
}
    
