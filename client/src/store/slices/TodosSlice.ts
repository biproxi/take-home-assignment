import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "types/todo";
import type { RootState } from "../store";

const initialState: Todo[] = [];

const host = "http://localhost:8080";

export const getAllTodos = createAsyncThunk("todos/getAll", async () => {
  const response = await axios.get(`${host}/api/todos`);
  return response.data;
});

export const insertTodo = createAsyncThunk(
  "todos/add",
  async (data: Todo, thunkAPI) => {
    const response = await axios.post(`${host}/api/todos`, data);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/update",
  async (editPayload: Todo) => {
    const response = await axios.put(
      `${host}/api/todos/${editPayload.createdAt}`,
      editPayload
    );
    return response.data;
  }
);
export const destroyTodo = createAsyncThunk(
  "todos/destroy",
  async (createdAt: number) => {
    const response = await axios.delete(`${host}/api/todos/${createdAt}`);
    return response.data;
  }
);

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(insertTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const todo = state.find(
        item => item.createdAt === action.payload.createdAt
      );
      if (todo) {
        todo.status = action.payload.status;
        todo.title = action.payload.title;
        todo.lastUpdatedAt = action.payload.lastUpdatedAt;
      } else {
        return todo;
      }
    });
    builder.addCase(destroyTodo.fulfilled, (state, action) => {
      const index = state.findIndex(
        todo => todo.createdAt === parseInt(action.payload.createdAt, 10)
      );
      state.splice(index, 1);
      return state;
    });
  },
});

// grabs the store abd
export const selectTodos = (state: RootState) => state.todos;
export default TodoSlice.reducer;
