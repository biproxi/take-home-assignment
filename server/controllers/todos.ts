import { Todo, TodoStatusEnum } from "../models/todo"
import { NextFunction, Request, Response } from "express";

export function getTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const todos: Todo[] = [{
            title: "Test Todo!",
            status: TodoStatusEnum.Active,
            lastUpdatedAt: new Date().getTime()/1000,
            createdAt: new Date().getTime()/1000
        }]

        res.status(200)
        res.send(todos)

        return
    } catch (err) {
        err.message = 'Could not GET Todos.'
        return next(err)
    }
}