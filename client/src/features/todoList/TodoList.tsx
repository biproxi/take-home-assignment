import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TodoItem } from './todoItem/TodoItem';
import { toggleTodoForm, selectDisplayAddTodoForm, selectToDos, TodoListState, TodoStatusEnum } from './todoListSlice';
import { StyledButton } from './todoItem/TodoItem';
import { NewTodoItem } from './todoItem/NewTodoItem';
import styled from "styled-components";


const Flexbox = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    border: .3em solid rgba(112, 76, 182, 0.4);
    border-radius: 1em;
    padding: .75em;
    margin: .5em 0 1em 0;
    gap: .5em;
`

// Maybe I should pass this down as a prop instead of import/export
const Row = styled.span`
    width: 100%
    border: .1em solid rgba(112, 76, 182, 0.4);
    background-color: rgba(112, 76, 182, 0.2);
    border-radius: .5em;
    padding: .3em;
    text-align: left;
`

const Title = styled.label`
    margin: 0 0 0 0;
    padding-bottom: 0;
`

export function TodoList() {
    const { todoList }: TodoListState = useAppSelector(selectToDos);
    const displayAddTodoForm = useAppSelector(selectDisplayAddTodoForm)
    const dispatch = useAppDispatch();
    
    return (
        <Flexbox>
            {todoList.map((todo) => todo.status !== TodoStatusEnum.Archived
                ? <TodoItem key={todo.id} todo={todo} row={Row} title={Title}/> 
                : null)
            }
            
            {displayAddTodoForm
                ? 
                <div>
                    <StyledButton onClick={() => dispatch(toggleTodoForm())}>
                        Do More?
                    </StyledButton>
                </div>
                :
                <NewTodoItem row={Row} title={Title}/>
            }
        </Flexbox>
    );
}
