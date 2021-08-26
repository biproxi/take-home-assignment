import { combineReducers } from 'redux';
import {todoReducer} from "./todoReducer";

// Setting up combined reducers in case I want to work on archived... unnecessary for just one reducer though
const rootReducer = combineReducers({
    todoReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;