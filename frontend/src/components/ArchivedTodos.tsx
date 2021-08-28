import React, {useEffect} from 'react';
import TodoItem from "./TodoItem";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/reducers";
import { PaddedContainer } from './StyledComponents';
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "../graphql/queries";
import {Todo} from "../types";

export default function ArchivedTodos() {
    const todos = useSelector((state: RootState) => state.todoReducer);
    // This is redundant but I don't have time to fix it right now, ideally this would be fetched from state or a cache
    const dispatch = useDispatch();
    const { loading, data } = useQuery(GET_TODOS);

    useEffect(() => {
        if (!loading && todos.length === 0) {
            data.todos.forEach((todo: Todo) => {
                dispatch({type: "ADD_TODO", payload: todo});
            })
        }
    }, [data])

    return (
        <PaddedContainer>
            <Typography variant="h5" color="textSecondary">Archived Todos</Typography>
            {todos.map((todo, i) => {
                if (todo.status === "Archived") {
                    return <PaddedContainer key={i}>
                        <TodoItem id={todo.id} title={todo.title} status={todo.status} createdAt={todo.createdAt} lastUpdatedAt={todo.lastUpdatedAt}/>
                    </PaddedContainer>
                }
                return null;
            })}
        </PaddedContainer>
    );
}

