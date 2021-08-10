import { combineReducers } from 'redux';
import reducers from './postReducer';

export default combineReducers({
  posts: reducers,
})