
export interface Todo {
    id: number
    title: string
    status: TodoStatusEnum
    lastUpdatedAt: number
    createdAt: number
}

export interface Store {
    todos: Todo[]
    newTodo: string
}

export enum TodoStatusEnum {
    Active = 'Active', 
    Inactive = 'Inactive', 
    Archived = 'Archived', 
}
