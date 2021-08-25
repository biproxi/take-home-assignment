// Ripped directly from README
enum TodoStatusEnum {
    Active = 'Active', // the todo has is not completed
    Inactive = 'Inactive', // the todo is completed
    Archived = 'Archived', // the todo is archived
};

interface Todo {
    title: string;
    status: TodoStatusEnum;
    lastUpdatedAt: number
    createdAt: number;
};

type Actions = "ADD_TODO" | "DELETE_TODO" | "EDIT_TODO";
type Action = {type: Actions, payload: Todo};

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
    }
}