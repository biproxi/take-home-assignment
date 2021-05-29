import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useMutation, gql } from "@apollo/client";
import Login from "./login";
import { Provider, RootStateOrAny, useSelector } from "react-redux";
import store from "./reducers/loginReducer";
import SignUp from "./signUp";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  container: {
    alignItems: "center",
  },
  margin: {},
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
  hidden: { display: "none" },
});

function App() {
  const classes = useStyles();
  let pageState = useSelector(
    (state: RootStateOrAny) => state.globalReducer.page
  );
  return (
    <Container className={classes.container}>
      <Container className={pageState === "login" ? "" : classes.hidden}>
        <Login />
      </Container>
      <Container className={pageState === "signUp" ? "" : classes.hidden}>
        <SignUp />
      </Container>
    </Container>
  );
}

export default App;
