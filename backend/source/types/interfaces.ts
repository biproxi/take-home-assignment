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

interface user {
  id: number;
  name: string;
  userName: string;
}
interface idInput {
  input: { id: number };
}
interface taskUpdateInput {
  input: {
    id: number;
    title?: string;
    status?: TodoStatusEnum;
    lastUpdatedAt: number;
  };
}

interface loginInput {
  input: {
    userName: string;
    password: string;
  };
}

interface queryInput {
  userID: number;
}

interface newUserInput {
  input: {
    name: string;
    userName: string;
    password: string;
  };
}
interface newTaskInput {
  input: {
    title: string;
    userID: number;
  };
}
export {
  TodoStatusEnum,
  Todo,
  user,
  idInput,
  taskUpdateInput,
  loginInput,
  queryInput,
  newTaskInput,
  newUserInput,
};
