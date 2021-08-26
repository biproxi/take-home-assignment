import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import {Todo} from "../types";
import * as React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import EditTodo from "./EditTodo";

export default function TodoItem(props: Todo) {
    const dispatch = useDispatch();
    // Once again state is being used here... just for UI logic, redux would be too much... right??
    const [edit, setEdit] = useState(false);

    return (
        <Card>
            <CardContent>
                <Typography variant="overline"><strong>Title:</strong> {props.title}</Typography> <br/>
                <Typography variant="overline"><strong>Status:</strong> {props.status}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Delete" onClick={() => {
                        dispatch({type: "DELETE_TODO", payload: props});
                    }
                }>
                    <DeleteIcon fontSize="medium" />
                </IconButton>

                <Fab size="small" color="secondary" aria-label="Add" onClick={() => {setEdit(!edit)}}>
                    <EditIcon/>
                </Fab>
            </CardActions>
            {
                edit ?
                <div style={{padding: "20px"}} >
                    <EditTodo title={props.title} status={props.status} createdAt={props.createdAt} lastUpdatedAt={props.lastUpdatedAt}/>
                </div>
                : null
            }
        </Card>
    )
}