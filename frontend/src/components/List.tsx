import React from 'react';
import TodoItem from "./TodoItem";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import {store} from "../state/store/store";
import {NavLink} from "react-router-dom";

export default function List() {
    return (
        <>
            <NavLink to="/create" style={{padding: "10px"}}>
                <Fab size="small" color="primary" aria-label="Add">
                    <AddIcon />
                </Fab>
            </NavLink>
            <br/>
            <Typography style={{padding: "10px"}} variant="h5" color="textSecondary">Active Todos</Typography>
            {store.getState().todoReducer.map((todo, i) => {
                return <div key={i} style={{padding: "10px"}}>
                    <TodoItem title={todo.title} status={todo.status} createdAt={todo.createdAt} lastUpdatedAt={todo.lastUpdatedAt}/>
                </div>
            })}
        </>
    );
}

