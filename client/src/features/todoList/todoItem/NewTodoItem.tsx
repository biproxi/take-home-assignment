import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { saveTodo, toggleTodoForm } from '../todoListSlice'
import styles from '../TodoList.module.css';
import styled, { StyledComponent } from 'styled-components'

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
                    <button type="submit" className={styles.button}>
                        Save
                    </button>
                    
                    <input type="text" name="todo" className={styles.textbox} value={unsavedTitle} onChange={event => setUnsavedTitle(event.target.value)} placeholder="Walk the dog" />
                </InputContainer>
            </form>
        </Row>
    );
}
