import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface InitialState {
  toDoList: Todo[], //array with type of Todo
  input?: String,
  status?: String
}

const initialState: InitialState = {
  toDoList: [],
  input: '',
  status: ''
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action: PayloadAction<Todo[]>) => {
      const todos = action.payload;
      state.toDoList = todos
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    }
  }
});

export const allTodos = (state: any) => state.todos.toDoList
export const actions = todoSlice.actions
// export default todoSlice.reducer
export const reducer = todoSlice.reducer;

// export const {
//   saveTodo,
//   setInput,
//   setStatus,
// } = todoSlice.actions;