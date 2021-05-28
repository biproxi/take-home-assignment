import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useMutation, gpl} from "@apollo/client";


const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    },
    container: {
        alignItems: "center"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



function App() {
    const classes = useStyles();
    const loginMutation = gpl`mutation{
  login(input: {userName: $userName, password: $password}){
    token
    name
  }
}`
    function test(event: React.FormEvent) {
        console.log(event);
        event.preventDefault();
        loginLink("test", "test")
    }
    function loginLink(userName: String, password: String) {
        const [createLink] = useMutation(loginMutation, {
            variables: {
                userName: userName,
                password: password
            }
        });
    }
  return (
    <Container className={classes.container} >
        <form onSubmit={test}>
          <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                  >
                      <FormControl >
                          <FormLabel>
                              Login
                          </FormLabel>
                          <TextField id="username" label="Username" variant="outlined" />
                          <TextField id="password" label="Password" variant="outlined" type={"password"} />
                      </FormControl>
                </Grid>
              </CardContent>
              <CardActions>
                  <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                  >
                    <Button  type={"submit"}>Login</Button>
                    <Button onClick={test}>Sign Up</Button>
                  </Grid>
              </CardActions>
          </Card>
        </form>
    </Container>
  );
}

export default App;
