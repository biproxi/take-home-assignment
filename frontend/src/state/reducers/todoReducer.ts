import {Todo, Action} from "../../types";

export const todoReducer = (state: Todo[] = [], action: Action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return [...state.filter(todo => {
                    return todo.title === action.payload.title;
                })]
        case "EDIT_TODO":
            return [...state]

        default:
            return [];
    }
}