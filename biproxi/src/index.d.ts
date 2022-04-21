import {ReactFragment} from "react";

export enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived', // the todo is archived (bonus)
}

export interface Todo {
  id: number; // the todo id
  title: string; // the title of the todo
  status: TodoStatusEnum; // the status of the todo
  lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}

export interface TodoItemProps {
  todo: Todo; // the todo itself

}

export interface TodoListProps {
  todos: [Todo]; // the list of todos
  counter: number; // the total number of todos
}

export interface TableProps {
  data: ReactFragment; // the data to be displayed in the table
  headers: string[]; // the headers of the table
}
