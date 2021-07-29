import { createStore } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const reducer = combineReducers(reducers);
const store = configureStore({ reducer: reducer });

export default store;
