import store from "./utils/redux/store";

export enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived', // the todo is archived (bonus)
}

export interface Todo {
  title: string; // the title of the todo
  status: TodoStatusEnum; // the status of the todo
  lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}

export interface TodoItem {
  todo: Todo; // the todo itself
}

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export interface TodoList {
  todos: Todo[]; // the list of todos
  totalCount: number; // the total number of todos
}