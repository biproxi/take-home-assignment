import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoListReducer from '../features/todoList/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
