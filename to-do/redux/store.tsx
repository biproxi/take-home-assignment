import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducers from './reducer';
// import reducers from './todoSlice';

const reducer = combineReducers(reducers);

const store = configureStore({
  reducer: reducer
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch