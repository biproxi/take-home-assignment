/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoStatus } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetTodoById
// ====================================================

export interface GetTodoById_returnTodoById {
  __typename: "Todo";
  status: TodoStatus | null;
  id: string | null;
  title: string | null;
  createdAt: number | null;
  lastUpdatedAt: number | null;
}

export interface GetTodoById {
  /**
   * Get a todo by Id
   */
  returnTodoById: GetTodoById_returnTodoById | null;
}

export interface GetTodoByIdVariables {
  id: string;
}
