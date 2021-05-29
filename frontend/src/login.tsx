import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Collapse, TextField } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React, { SyntheticEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect, useDispatch } from "react-redux";
import {
  changePage,
  updateLogin,
  updateTodoList,
} from "./reducers/loginReducer";
import { login } from "../../backend/source/resolvers/mutations";
import Alert from "@material-ui/lab/Alert";

const loginMutation = gql`
  mutation LoginMutation($userName: String!, $password: String!) {
    login(input: { userName: $userName, password: $password }) {
      token
      name
    }
  }
`;
const getTodoListQuery = gql`
  query getTodoListQuery {
    tasks {
      id
      title
      description
      completed
    }
  }
`;
const useStyles = makeStyles({
  center: {
    marginTop: "50px",
    marginLeft: "50px",
  },
  spacing: {
    margin: "10px",
  },
});

/**
 * Component for user login
 * @constructor
 */
function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loginLink] = useMutation(loginMutation);
  const { data, refetch } = useQuery(getTodoListQuery);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailure, setLoginFailure] = useState(false);

  /**
   * Handle when the user clicks login.
   * @param event
   */
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      let response = await loginLink({
        variables: { userName: userName, password: password },
      });
      localStorage.setItem("token", response.data.login.token);
      let todoList = await refetch();
      dispatch(updateTodoList(todoList.data.tasks));
      dispatch(updateLogin({ data: response.data.login, type: "login" }));
      setLoginFailure(false);
      dispatch(changePage("todo"));
    } catch (e) {
      setLoginFailure(true);
      console.log(e);
    }
  }

  /**
   * Change to sign up page.
   * @param event
   */
  function goToSignUp(event: SyntheticEvent) {
    console.log(event);
    dispatch(changePage("signUp"));
  }

  return (
    <form onSubmit={handleLogin}>
      <Card className={classes.center} variant="outlined">
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormControl>
              <FormLabel className={classes.spacing}>Login</FormLabel>
              <TextField
                className={classes.spacing}
                id="username"
                label="Username"
                variant="outlined"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                className={classes.spacing}
                id="password"
                label="Password"
                variant="outlined"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Collapse in={loginFailure}>
              <Alert severity="error">Login Failed!</Alert>
            </Collapse>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button type={"submit"}>Login</Button>
            <Button onClick={goToSignUp}>Sign Up</Button>
            <span></span>
          </Grid>
        </CardActions>
      </Card>
    </form>
  );
}

export default connect()(Login);
