// import formReducer from './reducers/index';
// import thunkMiddleware from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit';
import todos from './hooks';

// const store = createStore(formReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export const store = configureStore({
  reducer: {
    todos
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;