import formReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(formReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))


export default store;