import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getArchivedTodosAsync, selectAllTodosStatus, selectArchivedTodos } from "./todoSlice";
import TodoItem from "./TodoItem";

const TodoArchiveList = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(selectArchivedTodos)
    const status = useAppSelector(selectAllTodosStatus)

    useEffect(() => {
        dispatch(getArchivedTodosAsync())
    }, [ dispatch ])

    return (
        <div>
            <ul>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Oh Noes! Loading Failed.</p>}
                {todos.length
                    ? todos.map(todo =>  <TodoItem key={todo.id} todo={todo}/>)
                    : <p>There are no archived Todos at this time.</p>
                }
            </ul>
        </div>
    );
};

export default TodoArchiveList;
