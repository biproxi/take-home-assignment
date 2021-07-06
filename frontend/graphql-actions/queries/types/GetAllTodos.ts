/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TodoStatus } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetAllTodos
// ====================================================

export interface GetAllTodos_returnAllTodos {
  __typename: "Todo";
  status: TodoStatus | null;
  id: string | null;
  title: string | null;
  createdAt: number | null;
  lastUpdatedAt: number | null;
}

export interface GetAllTodos {
  /**
   * Get all the todos
   */
  returnAllTodos: (GetAllTodos_returnAllTodos | null)[] | null;
}
