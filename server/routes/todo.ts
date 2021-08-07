import express from "express";
import * as TodoController from "../controller/todo";

function getTodoRoutes() {
  const router = express.Router();
  // ROUTES //
  router.post("/todos", TodoController.AddTodo);

  router.get("/todos", TodoController.GetAllTodos);
  router.get("/todos/:id", TodoController.GetTodo);

  router.put("/todos/:id", TodoController.UpdateTodo);

  router.delete("/todos/:id", TodoController.DeleteTodo);
  return router;
}

export { getTodoRoutes };
