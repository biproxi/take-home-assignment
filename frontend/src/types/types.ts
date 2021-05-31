enum TodoStatusEnum {
    Active = "Active", // the todo has is not completed
    Inactive = "Inactive", // the todo is completed
    Archived = "Archived", // the todo is archived (bonus)
}

interface Todo {
  id: number; //Went too hard with the DB and now we need id
  title: string; // the title of the todo
  status: TodoStatusEnum; // the status of the todo
  lastUpdatedAt: number; // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}

export { TodoStatusEnum };
export type { Todo };
