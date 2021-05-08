import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { saveTodo, toggleTodoForm } from '../todoListSlice'
import styled, { StyledComponent } from 'styled-components'
import { StyledButton } from './TodoItem';

interface NewTodoRowProps {
    row: StyledComponent<"span", any, {}, never>
    title: StyledComponent<"label", any, {}, never>
}

const InputContainer = styled.div`
    display: flex;
    flex-dirextion: row;
    gap: .2em;
    align-items: center;
`

const StyledTextBox = styled.input`
    type: text;
    font-size: 32px;
    padding: .1em .2em .1em .2em;
    width: 100%;
    text-align: left;
    border-radius: .2em;
`

export function NewTodoItem(props: NewTodoRowProps) {
    const Row = props.row
    const Title = props.title
    const dispatch = useAppDispatch();
    const [unsavedTitle, setUnsavedTitle] = useState('');

    const handleTodoSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(saveTodo(unsavedTitle))
        dispatch(toggleTodoForm())
    }
    
    return (
        <Row>
            <Title>
                What do you want to remember?
            </Title>
            <form onSubmit={handleTodoSave}>
                <InputContainer>

                    <StyledButton type="submit">
                        Save
                    </StyledButton>
                    
                    <StyledTextBox value={unsavedTitle} placeholder="Walk the dog..." onChange={event => setUnsavedTitle(event.target.value)} />
                </InputContainer>
            </form>
        </Row>
    );
}
