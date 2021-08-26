import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import {Todo} from "../types";
import {NavLink} from "react-router-dom";
import * as React from "react";
import {useDispatch} from "react-redux";

export default function TodoItem(props: Todo) {
    const dispatch = useDispatch();

    return (
        <Card>
            <CardContent>
                <Typography variant="overline"><strong>Title:</strong> {props.title}</Typography> <br/>
                <Typography variant="overline"><strong>Status:</strong> {props.status}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Delete" onClick={() => {
                    console.log(props)
                        dispatch({type: "DELETE_TODO", payload: props});
                    }
                }>
                    <DeleteIcon fontSize="medium" />
                </IconButton>
                <NavLink to={{
                    pathname: "/edit",
                    state: {
                        title: props.title,
                        status: props.status
                    }
                }}>
                    <Fab size="small" color="secondary" aria-label="Add">
                    <EditIcon/>
                </Fab>
                </NavLink>
            </CardActions>
        </Card>
    )
}