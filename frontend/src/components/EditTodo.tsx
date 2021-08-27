import * as React from "react";
import {TextField} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Todo} from "../types";

export default function EditTodo(props: Todo) {
    const dispatch = useDispatch();
    // Yes I am using useState here, makes the most sense for something this small. Redux is still being used heavily though
    const [title, setTitle]  = useState(props.title);
    const [selected, setSelected] = useState(props.status);

    const handleSubmit = () => {
        dispatch({
            type: "EDIT_TODO",
            payload: {
                title: title,
                status: selected,
                createdAt: props.createdAt,
                lastUpdatedAt: Date.now() / 1000
            }
        });
    }
    return (
        <div>
            <TextField variant="outlined" label="Title" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
            <br/> <br/>
            <Select
                style={{width: "150px"}}
                value={selected}
                onChange={(e => setSelected(e.target.value as string))}
            >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Archived">Archived</MenuItem>
            </Select>
            <br/> <br/>
            <NavLink to='/'>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
            </NavLink>
        </div>
    )
}