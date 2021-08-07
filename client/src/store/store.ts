import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/TodosSlice";
import todosInput from "./slices/TodoInput";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todosInput: todosInput,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
