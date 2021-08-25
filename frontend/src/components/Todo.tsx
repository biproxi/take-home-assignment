import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as React from "react";

export default function Todo(props: any) {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2">{props.title}</Typography>
            </CardContent>
        </Card>
    )
}