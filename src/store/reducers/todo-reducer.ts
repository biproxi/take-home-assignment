import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//will create 'archived' state that holds archived todos. Will access with selector and will update in client with request to API route that updates database

//typing
enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived' // the todo is archived (bonus)
}
export interface Todo {
  id: number;
  title: string; // the title of the todo
  status: TodoStatusEnum;
  lastUpdatedAt: Date; // a unix timestamp representing the time the todo was last updated
  createdAt: Date; // a unix timestamp representing the time the todo was created
}

export type FormInput = string;
export type Status = string;

//initial state
const initialState = {
  todos: [],
  archive: [],
  formInput: '',
  status: ''
};

//slice: actions/ reducers, name
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

//selectors
export const selectTodos = (state) => state.todos.todos;
export const selectFormInput = (state) => state.todos.formInput;
export const selectStatus = (state) => state.todos.status;

//actions/reducer export
export const actions = todosSlice.actions;
export const reducer = todosSlice.reducer;
