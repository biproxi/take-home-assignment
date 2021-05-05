import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoStatusEnum } from "../Models/models";

const initialState = {
  todos: [],
};

/**
 * Creates a new slice to be used throughout the front-end
 * Basically contains all the reducers that are used by my client
 */
const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    /**
     * Sets the todos state to be an updated todo list
     * @param state {any}
     * @param action {PayloadAction<Array<Todo>>} The new todo list
     */
    setTodo: (state: any, action: PayloadAction<Array<Todo>>) => {
      const todoList: Array<Todo> = action.payload;
      state.todos = todoList;
    },

    /**
     * Sets the status of a certain todo to be either 'Active' or 'Inactive'
     * @param state {any}
     * @param action {PayloadAction<string>} the id associated with a todo
     */
    setComplete: (state: any, action: PayloadAction<string | undefined>) => {
      const payloadId: string | undefined = action.payload;
      state.todos.map((item: any) => {
        if (payloadId === item._id) {
          item.status === TodoStatusEnum.Active
            ? (item.status = TodoStatusEnum.Inactive)
            : (item.status = TodoStatusEnum.Active);
        }
      });
    },
    /**
     * Deletes a certain todo from the state
     * @param state {any}
     * @param action PayloadAction<string> the id associated with a todo
     */
    deleteTodo: (state: any, action: PayloadAction<string | undefined>) => {
      const payloadId: string | undefined = action.payload;
      state.todos.forEach((item: any, index: number) => {
        if (payloadId === item._id) {
          state.todos.splice(index, 1);
        }
      });
    },

    /**
     * Updates the title of a certain todo within the state
     * @param state {any}
     * @param action {PayloadAction<Todo>}
     */
    updateTodo: (state: any, action: PayloadAction<Todo>) => {
      const updatedTodo: Todo = action.payload;
      const updatedTodoId: string | undefined = updatedTodo._id;
      state.todos.forEach((item: any, index: number) => {
        if (updatedTodoId === item._id) {
          state.todos.splice(index, 1, updatedTodo);
        }
      });
    },
  },
});

export const fetchTodos = (state: any) => state.todos.todos;

export const {
  setTodo,
  setComplete,
  deleteTodo,
  updateTodo,
} = todoReducer.actions;
export default todoReducer.reducer;
