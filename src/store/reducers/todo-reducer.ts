import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//will create 'archived' state that holds archived todos. Will access with selector and will update in client with request to API route that updates database

//typing
interface Todo {
  id: number;
  title: string; // the title of the todo
  // lastUpdatedAt: number; // a unix timestamp representing the time the todo was last updated
  // createdAt: number; // a unix timestamp representing the time the todo was created
}

interface FormInput {
  title: string;
  // lastUpdatedAt: string;
  // createdAt: string;
}

//initial state
const initialState = {
  todos: [],
  archive: [],
  formInput: {}
};

//slice: actions/ reducers, name
const todosSlice = createSlice({
  name: 'todo',
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
export const selectTodos = (state) => state.todos;
export const selectFormInput = (state) => state.metrics.formInput;

//actions/reducer export
export const actions = todosSlice.actions;
export const reducer = todosSlice.reducer;
