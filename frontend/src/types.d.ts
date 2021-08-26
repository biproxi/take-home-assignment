// Ripped directly from README

// Enum not working when exported for some reason so have to declare it redundantly in some places :(
export enum TodoStatusEnum {
    Active = 'Active', // the todo has is not completed
    Inactive = 'Inactive', // the todo is completed
    Archived = 'Archived', // the todo is archived
}

export interface Todo {
    title: string;
    status: TodoStatusEnum;
    lastUpdatedAt: number
    createdAt: number;
}

export type Actions = "ADD_TODO" | "DELETE_TODO" | "EDIT_TODO";
export type Action = {type: Actions, payload: Todo};