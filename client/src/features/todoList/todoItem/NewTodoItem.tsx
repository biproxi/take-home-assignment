import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { saveTodo, selectDisplayAddTodoForm, toggleTodoForm } from '../todoListSlice'
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
    const displayAddTodoForm = useAppSelector(selectDisplayAddTodoForm)
    const [unsavedTitle, setUnsavedTitle] = useState('');

    const handleTodoSave = () => {
        dispatch(saveTodo(unsavedTitle))
        dispatch(toggleTodoForm())
    }
    
    return (
        <Row>
            <Title>
                What do you want to remember?
            </Title>
            <InputContainer>
                <button onClick={() => dispatch(saveTodo(unsavedTitle))} className={styles.button}>
                    Save
                </button>
                
                <input type="text" name="todo" className={styles.textbox} onChange={event => setUnsavedTitle(event.target.value)}  placeholder="Walk the dog" />
            </InputContainer>
        </Row>
    );
}
