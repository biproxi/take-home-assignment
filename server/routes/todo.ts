import express from "express";
import * as TodoController from "../controller/todo";

function getTodoRoutes() {
  const router = express.Router();

  router.post("/todos", TodoController.AddTodo);
  router.get("/todos", TodoController.GetAllTodos);
  router.get("/todos/:id", TodoController.GetTodo);
  router.put("/todos/:id", TodoController.UpdateTodo);
  router.delete("/todos/:id", TodoController.DeleteTodo);
  // ROUTES //

  return router;
}

export { getTodoRoutes };
