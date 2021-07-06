/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTodoInput, TodoStatus } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  __typename: "Todo";
  status: TodoStatus | null;
  id: string | null;
  title: string | null;
  createdAt: number | null;
  lastUpdatedAt: number | null;
}

export interface CreateTodo {
  /**
   * Create a new todo
   */
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  data?: CreateTodoInput | null;
}
