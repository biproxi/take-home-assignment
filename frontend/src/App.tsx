import React, { useEffect } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Login from "./login";
import { RootStateOrAny, useSelector } from "react-redux";
import SignUp from "./signUp";
import TaskList from "./TaskList";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
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
      <Container className={pageState === "todo" ? "" : classes.hidden}>
        <TaskList />
      </Container>
    </Container>
  );
}

export default App;
