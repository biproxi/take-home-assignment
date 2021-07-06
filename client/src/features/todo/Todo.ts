import { TodoStatusEnum } from "./TodoStatusEnum";

export interface Todo {
    id: string // Firebase ID
    title: string; // the title of the todo
    status: TodoStatusEnum; // the status of the todo
    lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
    createdAt: number; // a unix timestamp representing the time the todo was created
}
