import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import todosInput from "./slices/TodoInput";
import todosInputEdit from "./slices/TodosInputEdit";
import todosReducer from "./slices/TodosSlice";

// Pretty much all just boilplate here but this is configuring a store with all the reducers needed so then they can be called anywhere in the application
// They can be called anywhere in the application because the store is initialized at the app level
const store = configureStore({
  reducer: {
    todos: todosReducer,
    todosInput: todosInput,
    todosInputEdit: todosInputEdit,
  },
  // Thunk api boilperplate which I think is a frontend middleware...
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(thunkMiddleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
