/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * The status of the todo action
 */
export enum TodoStatus {
  Active = "Active",
  Archived = "Archived",
  Inactive = "Inactive",
}

export interface CreateTodoInput {
  title?: string | null;
  status?: TodoStatus | null;
}

export interface UpdateTodoInput {
  id?: string | null;
  title?: string | null;
  status?: TodoStatus | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
