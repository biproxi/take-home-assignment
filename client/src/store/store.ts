import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/TodosSlice";
import todosInput from "./slices/TodoInput";
import todosInputEdit from "./slices/TodosInputEdit";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todosInput: todosInput,
    todosInputEdit: todosInputEdit,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;