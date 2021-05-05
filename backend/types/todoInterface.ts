import { Document } from "mongoose";

/**
 * Todo enum used throughout the backend
 */
export enum TodoStatusEnum {
  Active = "Active", // the todo has is not completed
  Inactive = "Inactive", // the todo is completed
  Archived = "Archived", // the todo is archived (bonus)
}

/**
 * Todo interface used throughout the backend
 */
export interface ITodo extends Document {
  _id?: string;
  title: string;
  status: TodoStatusEnum;
  lastUpdatedAt: Date;
  createdAt?: Date;
}
