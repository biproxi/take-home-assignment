import React, {useEffect} from 'react';
import TodoItem from "./TodoItem";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/reducers";
import {Todo} from "../types";
import {useQuery} from "@apollo/client";
import {GET_TODOS} from "../graphql/queries";
import { PaddedContainer } from './StyledComponents';

export default function Table() {
    const todos = useSelector((state: RootState) => state.todoReducer);
    const dispatch = useDispatch();
    const { loading, data } = useQuery(GET_TODOS);

    useEffect(() => {
        if (!loading && todos.length === 0) {
            data.todos.forEach((todo: Todo) => {
                dispatch({type: "ADD_TODO", payload: todo});
            })
        }
    }, [data])


    return loading ?
        <p>Loading...</p> :
        <PaddedContainer>
            <NavLink to="/create" style={{padding: "10px"}}>
                <Fab size="small" color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
            </NavLink>
            <br/> <br/>
            <Typography variant="h5" color="textSecondary">Active Todos</Typography>
            {todos.map((todo: Todo, i: number) => {
                if (todo.status !== "Archived") {
                    return <PaddedContainer key={i}>
                        <TodoItem id={todo.id} title={todo.title} status={todo.status} createdAt={todo.createdAt} lastUpdatedAt={todo.lastUpdatedAt}/>
                    </PaddedContainer>
                }
                return null;
            })}
        </PaddedContainer>


}

