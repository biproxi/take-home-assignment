import React from 'react';
import TodoItem from "./TodoItem";
import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
import {RootState} from "../state/reducers";

export default function ArchivedTodos() {
    const todos = useSelector((state: RootState) => state.todoReducer);

    return (
        <div style={{padding: "10px"}}>
            <Typography variant="h5" color="textSecondary">Archived Todos</Typography>
            {todos.length === 0 ? <Typography color="textSecondary">None yet... :(</Typography> : null}
            {todos.map((todo, i) => {
                if (todo.status === "Archived") {
                    return <div key={i} style={{padding: "10px"}}>
                        <TodoItem title={todo.title} status={todo.status} createdAt={todo.createdAt} lastUpdatedAt={todo.lastUpdatedAt}/>
                    </div>
                }
                return null;
            })}
        </div>
    );
}

