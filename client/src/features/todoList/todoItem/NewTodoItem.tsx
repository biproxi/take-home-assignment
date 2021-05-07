import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
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

    const handleTodoSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(saveTodo(unsavedTitle))
        dispatch(toggleTodoForm())
    }

    
    return (
        <Row>
            <Title>
                What do you want to remember?
            </Title>
            <form>
                <InputContainer>
                    <button onClick={handleTodoSave} className={styles.button}>
                        Save
                    </button>
                    
                    <input type="text" name="todo" className={styles.textbox} onChange={event => setUnsavedTitle(event.target.value)}  placeholder="Walk the dog" />
                </InputContainer>
            </form>
        </Row>
    );
}
