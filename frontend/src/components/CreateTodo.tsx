import * as React from "react";
import {Button, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {TodoStatusEnum} from "../enums";
import {NavLink} from "react-router-dom";
import {useState} from "react";

export default function CreateTodo() {
    const dispatch = useDispatch();
    // Yes I am using useState here, seems a little unnecessary to use redux for this, however I know this was explicitly stated as a no go
    const [title, setTitle]  = useState("");

    const handleSubmit = () => {
        dispatch({type: "ADD_TODO", payload: {title: title, status: TodoStatusEnum.Active, createdAt: Date.now() / 1000, lastUpdatedAt: Date.now() / 1000}})
    }
    return (
        <div>
            <Typography variant="h5">Create a new Todo</Typography>
            <br/>
            <TextField variant="outlined" label="Title" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
            <br/> <br/>
            <NavLink to="/">
                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                    Save
                </Button>
            </NavLink>
        </div>
    )
}