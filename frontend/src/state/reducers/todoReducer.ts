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
        case "EDIT_TODO":
            // Since a todo ID was not provided in the given interface, I'm going to use the createdAt timestamp
            for (let i = 0; i < state.length; i++) {
                if (state[i].createdAt === action.payload.createdAt) {
                    state[i] = action.payload;
                }
            }
            return state
        default:
            return state;
    }
}