import {TodoStatusEnum} from "./enums";

export interface Todo {
    id: string;
    title: string;
    status: TodoStatusEnum;
    lastUpdatedAt: number
    createdAt: number;
}

export type Actions = "ADD_TODO" | "DELETE_TODO" | "UPDATE_TODO" | "CLEAR";
export type Action = {type: Actions, payload: Todo };