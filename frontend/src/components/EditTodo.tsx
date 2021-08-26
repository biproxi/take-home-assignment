import * as React from "react";
import {TextField, Typography} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Todo} from "../types";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function EditTodo(props: any) {
    const dispatch = useDispatch();
    // Yes I am using useState here, seems a little unnecessary to use redux for this, however I know this was explicitly stated as a no go
    const [title, setTitle]  = useState("");
    const [selected, setSelected] = useState("");

    return (
        <div>
            <Typography variant="h5">Edit a Todo</Typography>
            <br/>
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
            <Button variant="contained" color="primary">Save</Button>
        </div>
    )
}