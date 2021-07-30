import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//will create 'archived' state that holds archived todos. Will access with selector and will update in client with request to API route that updates database

//typing
export interface Todo {
  id: number;
  title: string; // the title of the todo
  // lastUpdatedAt: number; // a unix timestamp representing the time the todo was last updated
  // createdAt: number; // a unix timestamp representing the time the todo was created
}

export type FormInput = string;

//initial state
const initialState = {
  todos: [],
  archive: [],
  formInput: ''
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
    }
  }
});

//selectors
export const selectTodos = (state) => state.todos.todos;
export const selectFormInput = (state) => state.todos.formInput;

//actions/reducer export
export const actions = todosSlice.actions;
export const reducer = todosSlice.reducer;
