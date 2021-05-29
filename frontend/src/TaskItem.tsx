import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodoListItem,
  updateTodoListItem,
} from "./reducers/loginReducer";
import { gql, useMutation } from "@apollo/client";
import { Delete, Edit } from "@material-ui/icons";

interface props {
  title: string;
  completed: boolean;
  id: number;
  description: string;
}
const updateCompletedMutation = gql`
  mutation updateCompletedMutation($id: ID!, $completed: Boolean!) {
    updateTask(input: { id: $id, completed: $completed }) {
      id
    }
  }
`;
const updateTextMutation = gql`
  mutation updateTextMutation($id: ID!, $title: String, $description: String) {
    updateTask(input: { id: $id, title: $title, description: $description }) {
      id
    }
  }
`;
const deleteTaskMutation = gql`
  mutation deleteTaskMutation($id: ID!) {
    deleteTask(input: { id: $id }) {
      id
    }
  }
`;
/**
 * A task item in the task list.
 * @param title {string}
 * @param description {string}
 * @param completed {boolean}
 * @param id {number}
 * @constructor
 */
const TaskItem: React.FC<props> = ({ title, description, completed, id }) => {
  const [checked, setChecked] = useState(completed);
  const [descriptionEditor, setDescriptionEditor] = useState(description);
  const [titleEditor, setTitleEditor] = useState(title);
  const [editorOpen, setEditorOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const dispatch = useDispatch();
  const [updateCompletedLink] = useMutation(updateCompletedMutation);
  const [updateTextLink] = useMutation(updateTextMutation);
  const [deleteTaskLink] = useMutation(deleteTaskMutation);

  /**
   * Close the task editor.
   */
  const closeEditor = () => {
    setEditorOpen(false);
  };
  /**
   * Open the task editor.
   */
  const openEditor = () => {
    setEditorOpen(true);
  };

  /**
   * Delete a task from the DB and from the state.
   */
  async function deleteTask() {
    dispatch(deleteTodoListItem({ id: id }));
    let response = await deleteTaskLink({
      variables: { id: id },
    });
    setDeleteOpen(false);
  }

  /**
   * Update the title and description on the front and backend.
   */
  async function updateText() {
    dispatch(
      updateTodoListItem({
        id: id,
        data: {
          title: titleEditor,
          description: descriptionEditor,
          completed: completed,
          id: id,
        },
      })
    );
    let response = await updateTextLink({
      variables: { id: id, title: titleEditor, description: descriptionEditor },
    });
    setEditorOpen(false);
  }

  /**
   * Update the status of the task in DB and state.
   * @param event
   */
  async function updateCompleted(event: ChangeEvent) {
    setChecked(!checked);
    dispatch(
      updateTodoListItem({
        id: id,
        data: {
          title: title,
          description: description,
          completed: checked,
          id: id,
        },
      })
    );
    let response = await updateCompletedLink({
      variables: { id: id, completed: !checked },
    });
  }
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>
        <Checkbox checked={checked} onChange={updateCompleted} />
      </TableCell>
      <TableCell>
        <Button onClick={openEditor}>
          <Edit />
        </Button>
        <Dialog open={editorOpen}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
              value={titleEditor}
              onChange={(e) => {
                setTitleEditor(e.target.value);
              }}
              autoFocus
              margin="dense"
              label="Title"
              fullWidth
            />
            <TextField
              value={descriptionEditor}
              onChange={(e) => {
                setDescriptionEditor(e.target.value);
              }}
              autoFocus
              margin="dense"
              label="Description"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeEditor} color="primary">
              Cancel
            </Button>
            <Button onClick={updateText} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
      <TableCell>
        <Button onClick={() => setDeleteOpen(true)}>
          <Delete />
        </Button>
        <Dialog open={deleteOpen}>
          <DialogTitle>Are you sure you want to delete {title}?</DialogTitle>
          <DialogActions>
            <Button onClick={deleteTask} color="primary" autoFocus>
              Yes
            </Button>
            <Button onClick={() => setDeleteOpen(false)} color="secondary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export default TaskItem;
