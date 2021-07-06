import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TodoActionTypes, todoActions } from './TodoItem';
import { TodoInputForm } from './TodoInputForm';
import { TodoStatus } from 'graphql-actions/types/graphql-global-types';
import React from 'react';

export type TodoCTAButtonProps = {
  actionToPerform: TodoActionTypes;
  todoId?: string;
  todoTitle?: string;
  todoStatus?: TodoStatus;
};

export const TodoCTAButton: React.FC<TodoCTAButtonProps> = ({
  todoId,
  todoTitle,
  todoStatus,
  actionToPerform,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {todoActions[actionToPerform]}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{`${todoActions[actionToPerform]} Todo`}</DialogTitle>
        <TodoInputForm
          todoStatus={todoStatus}
          todoTitle={todoTitle}
          todoId={todoId}
          handleClose={handleClose}
          actionToPerform={actionToPerform}
        />
      </Dialog>
    </React.Fragment>
  );
};
