import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Reducer } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";

interface Action {
  type: string;
  value?: string;
}

const globalReducer = createSlice({
  name: "globalReducer",
  initialState: {
    page: "login",
    login: {
      token: "test",
      name: "",
    },
    todoList: [],
  },
  reducers: {
    updateLogin: (state, action) => {
      console.log(action);
      switch (action.payload.type) {
        case "login":
          state.login.token = action.payload.data.token;
          state.login.name = action.payload.data.name;
          state.page = "todo";
          break;
        case "logout":
          state.login = {
            token: "",
            name: "",
          };
          break;
        default:
          state = state;
      }
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    globalReducer: globalReducer.reducer,
  },
});

export const { updateLogin, changePage } = globalReducer.actions;
export default store;
