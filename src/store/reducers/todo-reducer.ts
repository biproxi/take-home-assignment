import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived' // the todo is archived (bonus)
}
export interface Todo {
  id: number;
  title: string; // the title of the todo
  status: TodoStatusEnum;
  lastUpdatedAt: number; // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}

export type FormInput = string;
export type Status = string;

interface InitialState {
  todos: Todo[];
  archive: Todo[];
  formInput: string;
  status: string;
}

const initialState: InitialState = {
  todos: [],
  archive: [],
  formInput: '',
  status: ''
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      const todos = action.payload;
      state.todos = todos;
    },
    setArchive: (state, action: PayloadAction<Todo[]>) => {
      const archive = action.payload;
      state.archive = archive;
    },
    setFormInput: (state, action: PayloadAction<FormInput>) => {
      const formInput = action.payload;
      state.formInput = formInput;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      const status = action.payload;
      state.status = status;
    }
  }
});

export const selectTodos = (state: any) => state.todos.todos;
export const selectFormInput = (state: any) => state.todos.formInput;
export const selectStatus = (state: any) => state.todos.status;

export const actions = todosSlice.actions;
export const reducer = todosSlice.reducer;
