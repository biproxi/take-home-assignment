import React, { useRef } from 'react';
import { Todo } from "./Todo";
import { TodoStatusEnum } from "./TodoStatusEnum";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { editTodoStatus, editTodoTitle, saveTodoAsync, selectTodoToEdit } from "./todoSlice";
import { StyledButton } from '../../style/button';
import { StyledInput } from '../../style/input';
import { StyledForm } from "../../style/form";

export interface TodoEditFormProps {
    todo: Todo;
}

const TodoEditForm = (props: TodoEditFormProps) => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const todoToEdit = useAppSelector(selectTodoToEdit)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(editTodoTitle(event.target.value))
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(editTodoStatus(event.target.value))
    }

    const handleSaveButtonClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault()
        if(todoToEdit) {
            dispatch(saveTodoAsync(todoToEdit))
        }
    }

    return (
        <StyledForm>
            <StyledInput
                ref={inputRef}
                type="text"
                value={todoToEdit?.title}
                onChange={handleInputChange}
            />
            <select
                defaultValue={props.todo.status}
                onChange={handleSelectChange}
            >
                <option value={TodoStatusEnum.Active}>{TodoStatusEnum.Active}</option>
                <option value={TodoStatusEnum.Inactive}>{TodoStatusEnum.Inactive}</option>
            </select>
            <StyledButton onClick={handleSaveButtonClick}>Save</StyledButton>
        </StyledForm>
    );
};

export default TodoEditForm;
