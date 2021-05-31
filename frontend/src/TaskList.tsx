import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { connect, RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { addTodoListItem, updateLogin } from "./reducers/loginReducer";
import TaskItem from "./TaskItem";
import { Add } from "@material-ui/icons";
import { gql, useMutation } from "@apollo/client";
import { Todo, TodoStatusEnum } from "./types/types";

interface todoListItemObject {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const createTaskMutation = gql`
  mutation createTaskMutation($title: String!) {
    createTask(input: { title: $title }) {
      id
      status
      createdAt
      lastUpdatedAt
    }
  }
`;

/**
 * The main holder component of the ToDo
 * list. Uses redux global state.
 * @constructor
 */
function TaskList() {
  const dispatch = useDispatch();
  const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);
  const [addTitle, setAddTitle] = useState("");
  const todoListState = useSelector(
    (state: RootStateOrAny) => state.globalReducer.todoList
  );
  const [createTaskLink] = useMutation(createTaskMutation);
  /**
   * Log the user out and clear their token.
   */
  const logout = () => {
    localStorage.clear();
    dispatch(updateLogin({ type: "logout" }));
  };

  /**
   * Create a new task on the backend and update the state with the new task
   * so it renders in the table.
   */
  async function createNewTask() {
    let response = await createTaskLink({
      variables: { title: addTitle },
    });
    dispatch(
      addTodoListItem({
        title: addTitle,
        status: TodoStatusEnum.Inactive,
        id: response.data.createTask.id,
        createdAt: response.data.createTask.createdAt,
        lastUpdatedAt: response.data.createTask.lastUpdatedAt,
      })
    );
    setAddTaskDialogOpen(false);
    setAddTitle("");
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Todo Task</TableCell>
              <TableCell>Completed</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Last Updated At</TableCell>
              <TableCell align={"right"}>
                <Button onClick={() => setAddTaskDialogOpen(true)}>
                  <Add />
                </Button>
              </TableCell>
              <TableCell align={"right"}>
                <Button onClick={logout}>Logout</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoListState.map((todoListItem: Todo) => (
              <TaskItem
                title={todoListItem.title}
                status={todoListItem.status}
                id={todoListItem.id}
                createdAt={todoListItem.createdAt}
                lastUpdatedAt={todoListItem.lastUpdatedAt}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={addTaskDialogOpen}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            value={addTitle}
            onChange={(e) => {
              setAddTitle(e.target.value);
            }}
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddTaskDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={createNewTask} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect()(TaskList);
