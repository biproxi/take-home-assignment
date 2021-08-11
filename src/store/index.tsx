import { configureStore } from '@reduxjs/toolkit';
import todos from './hooks';

export const store = configureStore({
  reducer: {
    todos
  }
})