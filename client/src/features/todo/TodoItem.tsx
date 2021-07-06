import React from 'react';
import { Todo } from "./Todo";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { archiveTodoAsync, deleteTodoAsync, editTodo, selectTodoToEdit } from "./todoSlice";
import { TodoStatusEnum } from "./TodoStatusEnum";
import TodoEditForm from "./TodoEditForm";
import { StyledButton } from "../../style/button";
import { StyledTodoItem } from "../../style/todo";


export interface TodoItemProps {
    todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
    const dispatch = useAppDispatch()
    const todoToEdit = useAppSelector(selectTodoToEdit)
    const { todo } = props

    const handleDeleteButtonClick = () => {
        dispatch(deleteTodoAsync(props.todo.id))
    }

    const handleArchiveButtonClick = () => {
        dispatch(archiveTodoAsync(props.todo.id))
    }

    const handleEditButtonClick = () => {
        dispatch(editTodo(props.todo))
    }

    return (
        <StyledTodoItem>
            <div className="todo-details">
                {
                    props.todo.id === todoToEdit?.id
                        ? <TodoEditForm todo={props.todo}/>
                        : <>
                            <p>{todo.title}</p>
                            {todo.status !== TodoStatusEnum.Archived && <div className="status">
                                <p>{todo.status}</p>
                                <StyledButton onClick={handleEditButtonClick}>Edit</StyledButton>
                                <StyledButton onClick={handleArchiveButtonClick}>Archive</StyledButton>
                                <StyledButton onClick={handleDeleteButtonClick}>Delete</StyledButton>
                            </div>}
                        </>
                }
            </div>
        </StyledTodoItem>
    );
};

export default TodoItem;
