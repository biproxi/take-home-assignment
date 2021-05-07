import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { Todo, TodoStatusEnum, updateTodo } from '../todoListSlice';
import styled, { StyledComponent } from "styled-components"
import styles from '../TodoList.module.css';
import { deleteTodo } from '../todoListSlice';


interface TodoRowProps {
    todo: Todo,
    row: StyledComponent<"span", any, {}, never>
    title: StyledComponent<"label", any, {}, never>
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

// Is passing a styled component as a prop preferable to import export? Or does keeping it in a separate file negate the point?
export function TodoItem(props: TodoRowProps) {
    const dispatch = useAppDispatch();
    const todo = props.todo
    const Row = props.row
    const Title = props.title
    

    const handleStatusChange = (event: React.ChangeEvent) => {
        event.preventDefault()
        const updatedTodo = { ...todo };
        updatedTodo.status = (todo.status === TodoStatusEnum.Active ? TodoStatusEnum.Inactive : TodoStatusEnum.Active)
        dispatch(updateTodo(updatedTodo))
    }

    const handleDelete = (event: React.MouseEvent) => {
        dispatch(deleteTodo(todo))
    }

    const isDone = todo.status === TodoStatusEnum.Active ? false : true;
    const statusMessage = isDone ? `Task completed ${(new Date(todo.lastUpdatedAt * 1000)).toLocaleString()}`
                                : `Task added ${(new Date(todo.createdAt * 1000)).toLocaleString()}`

    return (
        <Row>
            <TodoRowTop>
                <input name="isDone" type="checkbox" checked={isDone} onChange={handleStatusChange} className={styles.checkbox} />
                {/* change this to Styled components :( */}
                <Title style={isDone ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}}>
                    { todo.title }
                </Title>
            </TodoRowTop>

            <button className={styles.button} onClick={handleDelete}>
            Delete
            </button>
            
            <StatusMessage>
                { statusMessage }
            </StatusMessage>
        </Row>
    );
}
    






// const Button = styled.button<{ onClick: Event }>`
//     appearance: none;
//     background: none;
//     font-size: 32px;
//     padding-left: 12px;
//     padding-right: 12px;
//     outline: none;
//     border: 2px solid transparent;
//     color: rgb(112, 76, 182);
//     padding-bottom: 4px;
//     cursor: pointer;
//     background-color: rgba(112, 76, 182, 0.1);
//     border-radius: 2px;
//     transition: all 0.15s;
    
//     &:hover,
//     &:focus {
//         border: 2px solid rgba(112, 76, 182, 0.4);
//     }

//     &:active {  
//         background-color: rgba(112, 76, 182, 0.2);
//     }
// `;

// const Container = styled.span`
//   text-align: center;
// `

// const Checkbox = styled.input.attrs(props => {{
//     type: "checkbox"
// }})<{ event: Event }>`
//     opacity: 0;
//     width: 1em;
//     height: 1em;
//     border: 0.1em solid currentColor;
//     border-radius: 0.25em;
// `


    // Having trouble with typings on <Button> styled component
    // onClick={handleArchive}
    // const handleArchive = (event: Event) => {
    //     event.preventDefault()
    //     dispatch(deleteTodo(todo))
    // }

    // <Container>
    //     <Button onClick={handleArchive} >Archive (Not Connected)</Button>
    // </Container>

    // <Checkbox  onChange={handleStatusChange} ></Checkbox>
