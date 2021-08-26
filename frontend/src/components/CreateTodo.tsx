import * as React from "react";
import {Button, TextField, Typography} from "@material-ui/core";

export default function CreateTodo() {
    return (
        <div>
            <Typography variant="h5">Create a new Todo</Typography>
            <br/>
            <TextField variant="outlined" label="Title"/>
            <br/> <br/>
            <Button variant="contained" color="primary">Save</Button>
        </div>
    )
}