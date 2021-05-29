import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect, RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { changePage, updateLogin } from "./reducers/loginReducer";
import { login } from "../../backend/source/resolvers/mutations";
const loginMutation = gql`
  mutation LoginMutation($userName: String!, $password: String!) {
    login(input: { userName: $userName, password: $password }) {
      token
      name
    }
  }
`;
const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  container: {
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loginState = useSelector(
    (state: RootStateOrAny) => state.globalReducer.login
  );
  const [loginLink] = useMutation(loginMutation);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      let response = await loginLink({
        variables: { userName: userName, password: password },
      });
      console.log(response);
      dispatch(updateLogin({ data: response.data.login, type: "login" }));
    } catch (e) {
      console.log(e);
    }
  }

  function goToSignUp(event: SyntheticEvent) {
    console.log(event);
    dispatch(changePage("signUp"));
  }

  return (
    <form onSubmit={handleLogin}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormControl>
              <FormLabel>Login</FormLabel>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button type={"submit"}>Login</Button>
            <Button onClick={goToSignUp}>Sign Up</Button>
          </Grid>
        </CardActions>
      </Card>
    </form>
  );
}

export default connect()(Login);
