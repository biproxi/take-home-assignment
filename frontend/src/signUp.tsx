import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { TextField } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";
import { changePage, updateLogin } from "./reducers/loginReducer";
const createUserMutation = gql`
  mutation CreateUserMutation(
    $userName: String!
    $password: String!
    $name: String!
  ) {
    createUser(input: { userName: "test", name: "test", password: "test" }) {
      id
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
export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [createUserLink] = useMutation(createUserMutation);
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    try {
      let response = await createUserLink({
        variables: { name: name, userName: userName, password: password },
      });
      console.log(response);
      // dispatch(updateLogin({ data: response.data.login, type: "login" }));
    } catch (e) {
      console.log(e);
    }
  }
  function goToSignIn(event: any) {
    dispatch(changePage("login"));
  }
  return (
    <form onSubmit={handleSignUp}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <FormControl>
              <FormLabel>Sign Up</FormLabel>
              <TextField
                id="name"
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
            <Button type={"submit"}>Sign Up</Button>
            <Button onClick={goToSignIn}>Back to Login</Button>
          </Grid>
        </CardActions>
      </Card>
    </form>
  );
}
