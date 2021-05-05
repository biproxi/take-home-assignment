import { Router } from "express"
import { getAllTodos, addTodo, deleteTodo, updateTodo } from "../controller/controller";

const router: Router = Router();

router.get("/todos", getAllTodos);

router.post("/newTodo", addTodo);

router.put("/editTodo/:id", updateTodo)

router.delete("/deleteTodo/:id", deleteTodo)

export default router