import React from "react";
import ToDoTextField from "./ToDoTextField";
import ToDoList from "./ToDoList";
import { Provider } from "react-redux";
import configureStore from "../Redux/store";
import styled from "styled-components";
import { Typography } from "@material-ui/core";

const ApplicationWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(168, 173, 182);
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const ToDoContainer = styled.div`
  height: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 30px 0;
  background-color: rgb(232, 234, 237);
`;

/**
 * Main component that renders everything within the component tree
 * @returns {JSX.Element}
 */
const ToDoHome: React.FC = () => {

  return (
    <ApplicationWrapper>
        <Provider store={configureStore}>
          <ToDoContainer>
            <Typography variant="h5">Todo List</Typography>
            <ToDoList />
            <ToDoTextField />
          </ToDoContainer>
        </Provider>
    </ApplicationWrapper>
  );
};

export default ToDoHome;
