import * as React from "react";
import {TextField, Typography} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Button} from "@material-ui/core";

export default function EditTodo() {
    return (
        <div>
            <Typography variant="h5">Edit a Todo</Typography>
            <br/>
            <TextField variant="outlined" label="Title"/>
            <br/> <br/>
            <Select
                displayEmpty
                style={{width: "150px"}}
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