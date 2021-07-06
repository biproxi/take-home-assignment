import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledButton } from '../../style/button';
import { StyledInput } from '../../style/input';
import { addTodoAsync, selectNewTitle, setNewTitle } from "./todoSlice";
import { StyledForm } from "../../style/form";

const TodoForm = () => {
    const dispatch = useAppDispatch()
    const newTitle = useAppSelector(selectNewTitle)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddButtonClick = (event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault()
        const { current } = inputRef
        if (current?.value) {
            dispatch(addTodoAsync(current?.value))
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setNewTitle(event.target.value))
    }

    return (
        <StyledForm>
            <StyledInput
                ref={inputRef}
                type="text"
                placeholder="What do you want to do?"
                onChange={handleInputChange}
                value={newTitle}
            />
            <StyledButton onClick={handleAddButtonClick}>+Add</StyledButton>
        </StyledForm>
    );
};

export default TodoForm;
