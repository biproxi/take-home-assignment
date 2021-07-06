import { registerEnumType } from 'type-graphql';

export enum TodoStatus {
    Active = 'Active',
    Inactive = 'Inavtive',
    Archived = 'Archived'
}

registerEnumType(TodoStatus, {
    name: 'TodoStatus',
    description: 'The status of the todo action', 
  });