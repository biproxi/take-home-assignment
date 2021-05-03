export enum TodoStatusEnum {
    Active = 'Active', // the todo has is not completed
    Inactive = 'Inactive', // the todo is completed
    Archived = 'Archived', // the todo is archived (bonus)
}
  
export interface Todo {
    id?: number,
    title: string;
    status: TodoStatusEnum;
    lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
    createdAt: number; // a unix timestamp representing the time the todo was created
}
