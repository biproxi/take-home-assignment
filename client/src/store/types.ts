
export interface Todo {
    id: number;
    text: string;
    status: TodoStatusEnum;
}

export interface Store {
    todos: Todo[];
    newTodo: string;
}

export enum TodoStatusEnum {
    Active = 'Active', 
    Inactive = 'Inactive', 
    Archived = 'Archived', 
}
