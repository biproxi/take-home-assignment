import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Collapse, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React, { SyntheticEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";
import { changePage } from "./reducers/loginReducer";

const createUserMutation = gql`
  mutation CreateUserMutation(
    $userName: String!
    $password: String!
    $name: String!
  ) {
    createUser(
      input: { userName: $userName, name: $name, password: $password }
    ) {
      id
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
 * Component used for signup.
 * @constructor
 */
export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [createUserLink] = useMutation(createUserMutation);
  const [userName, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [createUserSuccess, setCreateUserSuccess] = useState(false);

  /**
   * Handles when a user clicks signup by creating them an account on the backend.
   * @param event {React.FormEvent}
   */
  async function handleSignUp(event: React.FormEvent) {
    event.preventDefault();
    try {
      let response = await createUserLink({
        variables: { name: name, userName: userName, password: password },
      });
      setCreateUserSuccess(true);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Change page back to sign in.
   * @param event
   */
  function goToSignIn(event: SyntheticEvent) {
    dispatch(changePage("login"));
  }
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <Card className={classes.center} variant="outlined">
          <CardContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <FormControl>
                <FormLabel className={classes.spacing}>Sign Up</FormLabel>
                <TextField
                  className={classes.spacing}
                  id="name"
                  label="Your Name"
                  variant="outlined"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  className={classes.spacing}
                  id="username"
                  label="Username"
                  variant="outlined"
                  value={userName}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  className={classes.spacing}
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={"password"}
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Collapse in={createUserSuccess}>
                <Alert severity="success">Account Created!</Alert>
              </Collapse>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button type={"submit"}>Sign Up</Button>
              <Button onClick={goToSignIn}>Back to Login</Button>
            </Grid>
          </CardActions>
        </Card>
      </form>
    </div>
  );
}
