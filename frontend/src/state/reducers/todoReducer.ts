import {Todo, Action} from "../../types";

export const todoReducer = (state: Todo[] = [], action: Action) => {
    switch(action.type) {
        // This feels wrong
        case "CLEAR":
            return [];
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter(todo => {
                return todo.id !== action.payload.id
            })
        case "UPDATE_TODO":
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i] = action.payload;
                }
            }
            return state
        default:
            return state;
    }
}