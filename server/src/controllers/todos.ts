import { Todo, TodoStatusEnum } from "../models/todo"
import { NextFunction, Request, Response } from "express";

// This is a database if you really use your imagination...
// The Map key is the id of the todo.
const todosDB: Map<number, Todo> = new Map()
let idIndex = 0


/*
Success: sends 200 response with list of all Todos
Failure: sends error code with message)
*/
export function getTodos(req: Request, res: Response, next: NextFunction) {
    try {
        const todos: Todo[] = [ ...todosDB.values() ]
        res.status(200)
        res.json(todos)
        return
    } catch (err) {
        err.message = 'Could not GET Todos'
        return next(err)
    }
}

/*
Success: sends 200 response with found Todo
Failure: sends error code with message)
*/
export function getTodoById(req: Request, res: Response, next: NextFunction) {
    try {
        const id: number = Number(req.params.id)
        const todo: Todo | undefined = todosDB.get(id)

        if (todo) {
            res.status(200)
            res.json(todo)
        } else {
            res.status(404)
            res.json({ message: `Could not GET Todo with ID '${req.params.id}'` })
        }
        return

    } catch (err) {
        err.message = `Could not GET Todo with ID '${req.params.id}'`
        return next(err)
    }
}

/*
Success: sends 200 response with newly created Todo
Failure: sends error code with message)
*/
export function createTodo(req: Request, res: Response, next: NextFunction) {
    try {
        const timestamp = Math.floor(Date.now() / 1000)
        const id = idIndex
        const todo: Todo = {
            id,
            title: req.body.todo.title,
            status: TodoStatusEnum.Active,
            lastUpdatedAt: timestamp,
            createdAt: timestamp
        }
        idIndex++

        todosDB.set(id, todo)

        res.status(200)
        res.json(todo)

    } catch (err) {
        err.message = `Could not create todo titled ${req.body?.todo?.title}`
        return next(err)
    }
}

/*
Success: sends 200 response with updated Todo
Failure: sends error code with message)
*/
export function updateTodo(req: Request, res: Response, next: NextFunction) {
    try {
        const newTodo = req.body.todo
        const id = Number(req.params.id)
        const todo: Todo | undefined = todosDB.get(id)

        if (todo) {

            if (Object.values(TodoStatusEnum).includes(newTodo?.status)) {
                todo.status = newTodo.status
            }
            todo.title = newTodo?.title || todo.title
            todo.lastUpdatedAt = Math.floor(Date.now() / 1000)
            
            todosDB.set(id, todo)
            res.status(200)
            res.json(todo)

        } else {
            res.status(404)
            res.json({ message: `Todo with ID '${req.params.id}' cannot be updated because it does not exist`})
        }
        
    } catch (err) {
        err.message = `Could not update todo titled with id ${req.params.id}`
        return next(err)
    }
}


/*
Success: sends 200 response with message including ID
Failure: sends error code with message)
*/
export function deleteTodo(req: Request, res: Response, next: NextFunction) {
    try {
        const id: number = Number(req.params.id)
        const success: boolean = todosDB.delete(id)
        if (success) {
            res.status(200)
            res.json({ message: `Deleted Todo with ID ${req.params.id}` })
        } else {
            res.status(404)
            res.json({ message: `Todo with ID '${req.params.id}' cannot be deleted because it does not exist` })
        }
        return
    } catch (err) {
        err.message = `Could not DELETE todo with ID ${req.params.id}`
    }

}