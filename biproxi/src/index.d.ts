import {ReactFragment} from "react";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

export enum TodoStatusEnum {
  Active = 'Active', // the todo is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived', // the todo is archived
}

export interface Todo {
  id: string; // the todo id
  title: string; // the title of the todo
  status_: TodoStatusEnum; // the status of the todo
  updatedAt: string // a unix timestamp representing the time the todo was last updated
  createdAt: string; // a unix timestamp representing the time the todo was created
}

export interface TodoList {
  length: number;
  todos: [Todo] | []; // the list of todos
  map(element: (todo: Todo) => JSX.Element): JSX.Element;
}

export interface Table {
  data: ReactFragment; // the data to be displayed in the table
  headers: string[]; // the headers of the table
  title: string; // the title of the table
}

export type Data = {
  data: any // TODO: define type
}

export interface DataError{
    error: string;
}