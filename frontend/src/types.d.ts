// Ripped directly from README

export interface Todo {
    id: string;
    title: string;
    status: TodoStatusEnum;
    lastUpdatedAt: number
    createdAt: number;
}

export type Actions = "ADD_TODO" | "DELETE_TODO" | "EDIT_TODO" | "CLEAR";
export type Action = {type: Actions, payload: Todo };