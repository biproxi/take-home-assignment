import React from 'react';
import Todo from "./Todo";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import {store} from "../state/store/store";

export default function List() {
    return (
        <>
            <TextField id="standard-basic" label="Add a todo" />
            <Fab size="small" color="primary" aria-label="Add">
                <AddIcon />
            </Fab>
            {store.getState().todoReducer.map((todo, i) => {
                return <Todo title={todo.title}/>
            })}
        </>
    );
}

