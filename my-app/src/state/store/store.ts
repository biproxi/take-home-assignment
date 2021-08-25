import {createStore} from "redux";
import combinedReducers from "../reducers";

export const store = createStore(combinedReducers);