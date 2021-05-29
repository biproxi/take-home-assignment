import { configureStore, createSlice } from "@reduxjs/toolkit";

interface todoListItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

/**
 * Global state
 */
const globalReducer = createSlice({
  name: "globalReducer",
  initialState: {
    page: "login",
    login: {
      token: "test",
      name: "",
    },
    todoList: Array<todoListItem>(),
  },
  reducers: {
    /**
     * Update if the user is logged in or not.
     * @param state {Draft<State>}
     * @param action {{payload: {type: string, data: {token: string, name: string}}}}
     */
    updateLogin: (state, action) => {
      console.log(action);
      switch (action.payload.type) {
        case "login":
          state.login.token = action.payload.data.token;
          state.login.name = action.payload.data.name;
          break;
        case "logout":
          state.login = {
            token: "",
            name: "",
          };
          state.page = "login";
          break;
        default:
          state = state;
      }
    },
    /**
     * Change what page is displayed.
     * @param state {Draft<State>}
     * @param action {payload: string}
     */
    changePage: (state, action) => {
      state.page = action.payload;
    },
    /**
     * Replace the whole todoList with a new todoList.
     * @param state {Draft<State>}
     * @param action {payload: Array<{id: number, title: string, description: string, completed: boolean}>}
     */
    updateTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    /**
     * Update an individual todoList item
     * @param state {Draft<State>}
     * @param action {payload: {id: number, title: string, description: string, completed: boolean}}
     */
    updateTodoListItem: (state, action) => {
      let index = state.todoList.findIndex(
        (item: todoListItem) => action.payload.id === item.id
      );
      state.todoList[index] = action.payload.data;
    },
    /**
     * Delete a todolist item
     * @param state {Draft<State>}
     * @param action {payload: {id: number}}
     */
    deleteTodoListItem: (state, action) => {
      let index = state.todoList.findIndex(
        (item: todoListItem) => action.payload.id === item.id
      );
      delete state.todoList[index];
    },
    /**
     * Add a item to the list
     * @param state {Draft<State>}
     * @param action {payload: {id: number, title: string, description: string, completed: boolean}}
     */
    addTodoListItem: (state, action) => {
      state.todoList.push(action.payload);
    },
  },
});
const store = configureStore({
  reducer: {
    globalReducer: globalReducer.reducer,
  },
});

export const {
  updateLogin,
  changePage,
  updateTodoList,
  updateTodoListItem,
  deleteTodoListItem,
  addTodoListItem,
} = globalReducer.actions;
export default store;
