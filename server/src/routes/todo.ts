import { Router, Request, Response } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router = Router()

router.get("/", getTodos)

router.post("/", addTodo)

router.put("/:id", updateTodo)

router.delete("/:id", deleteTodo)

export { router as todoRouter}