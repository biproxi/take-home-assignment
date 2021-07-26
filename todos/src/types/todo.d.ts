enum TodoStatusEnum {
  Active = "Active", // the todo has is not completed
  Inactive = "Inactive", // the todo is completed
  Archived = "Archived", // the todo is archived (bonus)
}

interface Todo {
  ID: number;
  Title: string; // the title of the todo
  Status: TodoStatusEnum; // the status of the todo
  LastUpdatedAt: number; // a unix timestamp representing the time the todo was last updated
  DreatedAt: number; // a unix timestamp representing the time the todo was created
}

export default Todo;
