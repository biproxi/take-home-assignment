import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "types/todo";
import type { RootState } from "../store";

const initialState: Todo[] = [];

const host = "http://localhost:5000";

// A string that will be used as the prefix for the generated action types
// A "payload creator" callback function that should return a Promise. This is often written using the async/await syntax, since async functions automatically return a promise.
// These are all the endpoints interacting with the backend using the createAsyncThunk api
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
  // The logic in these 'addCases' were the same logic I had in my reducers object when I wasnt interacting with the backend
  // You can have cases for pending, fulfilled, rejected, currently my error handling is on the backend
  // Due to time constraints I kept it simple with just fulfilled states, if time a wasnt an issue I would create pending states with a loading component

  // state represents the current state of the application, action is an object which we interact with the action.payload to get what was passed in the dispatch action
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
