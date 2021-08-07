import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TodoStatusEnum, Todo } from "types/todo";

const initialState: Todo[] = [
  {
    title: "test data1",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: Math.floor(Date.now() / 1000),
    createdAt: Math.floor(Date.now() / 1000),
  },
  {
    title: "test data2",
    status: TodoStatusEnum.Active,
    lastUpdatedAt: Math.floor(Date.now() / 1000),
    createdAt: Math.floor(Date.now() / 1000) + 45,
  },
  {
    title: "test data3",
    status: TodoStatusEnum.Inactive,
    lastUpdatedAt: Math.floor(Date.now() / 1000),
    createdAt: Math.floor(Date.now() / 1000) + 12,
  },
];

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(todo => todo.createdAt === action.payload);
      state.splice(index, 1);
    },
    // edit: (state, action: PayloadAction<Todo>) => {
    //   const updateTodos = state.map((todo) => {
    //     todo.createdAt === action.createdAt ? {...todo, todo}
    //   })
    // },
    toggle: (state, action: PayloadAction<number>) => {
      const todo = state.find(item => item.createdAt === action.payload);
      if (todo) {
        if (todo.status === TodoStatusEnum.Active) {
          todo.status = TodoStatusEnum.Inactive;
        } else {
          todo.status = TodoStatusEnum.Active;
        }
      } else {
        return state;
      }
    },
  },
});

export const { create, toggle, remove } = TodoSlice.actions;
// grabs the store abd
export const selectTodos = (state: RootState) => state.todos;
export default TodoSlice.reducer;
