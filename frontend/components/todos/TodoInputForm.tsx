import {
  TextField,
  Button,
  makeStyles,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { TodoCTAButtonProps } from './TodoCTAButton';
import { UPDATE_TODO, CREATE_TODO } from 'graphql-actions/mutations/todos';
import {
  UpdateTodoVariables,
  UpdateTodo,
} from 'graphql-actions/mutations/types/UpdateTodo';
import { GET_ALL_TODOS } from 'graphql-actions/queries/todos';
import { useMutation } from '@apollo/client';
import {
  CreateTodo,
  CreateTodoVariables,
} from 'graphql-actions/mutations/types/CreateTodo';
import { TodoStatus } from 'graphql-actions/types/graphql-global-types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',

    '& .MuiTextField-root': {
      margin: '16px',
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: '16px',
    },
  },
});

// TODO: Separate logic out into separate component/hook

export type TodoInputFormProps = {
  handleClose: () => void;
} & TodoCTAButtonProps;

export const TodoInputForm: React.FC<TodoInputFormProps> = ({
  todoId,
  todoStatus,
  actionToPerform,
  todoTitle,
  handleClose,
}) => {
  const { handleSubmit, control } = useForm();

  const classes = useStyles();

  const [updateTodo] = useMutation<UpdateTodo, UpdateTodoVariables>(
    UPDATE_TODO,
    {
      refetchQueries: [
        {
          query: GET_ALL_TODOS,
        },
      ],
    }
  );

  const [createTodo] = useMutation<CreateTodo, CreateTodoVariables>(
    CREATE_TODO,
    {
      refetchQueries: [
        {
          query: GET_ALL_TODOS,
        },
      ],
    }
  );

  const onEditSubmit = async (data: any) => {
    try {
      const result = await updateTodo({
        variables: {
          data: {
            id: todoId,
            title: data.todoTitle,
            status: data.todoStatus,
          },
        },
      });
      return {
        success: result,
      };
    } catch (error) {
      console.error(
        'An error occurred while executing the UPDATE_TODO operation: ',
        error
      );
      return {
        success: false,
      };
    }
  };

  const onCreateSubmit = async (data: any) => {
    try {
      const result = await createTodo({
        variables: {
          data: {
            title: data.todoTitle,
            status: data.todoStatus,
          },
        },
      });
      return {
        success: result.data.createTodo.id ? true : false,
      };
    } catch (error) {
      console.error(
        'An error occurred while executing the CREATE_TODO operation: ',
        error
      );
      return {
        success: false,
      };
    }
  };

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(e => {
        if (actionToPerform === 'edit') {
          onEditSubmit(e);
        } else if (actionToPerform === 'create') {
          onCreateSubmit(e);
        }
        handleClose();
      })}
    >
      <Controller
        name="todoTitle"
        control={control}
        defaultValue={todoTitle || ''}
        rules={{ required: 'Todo title required' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Todo title "
            variant="filled"
            required
            value={value}
            error={!!error}
            helperText={error ? error.message : null}
            onChange={onChange}
          />
        )}
      />
      {actionToPerform === 'edit' && (
        <Controller
          name="todoStatus"
          control={control}
          defaultValue={todoStatus || TodoStatus.Active}
          rules={{ required: 'Todo status required' }}
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              aria-label="todoStatus"
              name="anonymous"
              value={value}
              onChange={onChange}
              row
            >
              <FormControlLabel
                value={TodoStatus.Active}
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value={TodoStatus.Inactive}
                control={<Radio />}
                label="Inactive"
              />
              <FormControlLabel
                value={TodoStatus.Archived}
                control={<Radio />}
                label="Archived"
              />
            </RadioGroup>
          )}
        />
      )}
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};
