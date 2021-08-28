import * as React from "react";
import {TextField} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Todo} from "../types";
import {useMutation} from "@apollo/client";
import {UPDATE_TODO} from "../graphql/mutations";
import {TodoStatusEnum} from "../enums";

export default function EditTodo(props: Todo) {
    const dispatch = useDispatch();
    const [updateTodo] = useMutation(UPDATE_TODO);
    // Yes I am using useState here, makes the most sense for something this small. Redux is still being used heavily though
    const [title, setTitle]  = useState(props.title);
    const [selected, setSelected] = useState(props.status);

    const handleSubmit = () => {
        updateTodo({variables: {data: {title: title, status: selected, lastUpdatedAt: Date.now() / 1000}, id: props.id}})
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                id: props.id,
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
                onChange={(e => setSelected(e.target.value as TodoStatusEnum))}
            >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Archived">Archived</MenuItem>
            </Select>
            <br/> <br/>
            {/*This forces a rerender.... obviously not the best way to do this, trying to minimize useState usage as the README outlined*/}
            <NavLink to='/'>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
            </NavLink>
        </div>
    )
}