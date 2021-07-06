import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllTodosAsync, selectAllTodos, selectAllTodosStatus } from "./todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(selectAllTodos)
    const status = useAppSelector(selectAllTodosStatus)

    useEffect(() => {
        dispatch(getAllTodosAsync())
    }, [ dispatch ])

    return (
        <div>
            <ul>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Oh Noes! Loading Failed.</p>}
                {todos.length
                    ? todos.map(todo =>  <TodoItem key={todo.id} todo={todo}/>)
                    : status === 'idle' && <p>There are no Todos in the list, perhaps you should add some!</p>
                }
            </ul>
        </div>
    );
};

export default TodoList;
