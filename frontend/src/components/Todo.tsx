import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import {TodoProps} from "../types";
import * as React from "react";

export default function Todo(props: TodoProps) {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2">{props.title}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Delete">
                    <DeleteIcon fontSize="medium" />
                </IconButton>
                <Fab size="small" color="secondary" aria-label="Add">
                    <EditIcon/>
                </Fab>
            </CardActions>
        </Card>
    )
}