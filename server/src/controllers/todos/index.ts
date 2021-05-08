import { RequestHandler } from 'express'
import { Todo, TodoStatusEnum } from '../../models/todo'

//Only storing the todos in memory
const TODOS: Todo[] = []
let startingIndex = 0

export const getTodos: RequestHandler = (req, res) => {
  try {
    res.status(201)
    res.json({ message: "Todos retrieved", todos: TODOS})
  } catch (err) {
    throw err
  }
}

export const addTodo: RequestHandler = (req, res) => {
  try {
    const time = Math.floor(Date.now() / 1000)
    const id = startingIndex
    const todo: Todo = {
      id: id,
      title: req.body.title,
      status: TodoStatusEnum.Active,
      lastUpdatedAt: time,
      createdAt: time
    }

    startingIndex++
    TODOS.push(todo)

    res.status(201)
    res.json({ message: "Todo added", todo})
  } catch (err) {
      throw err
  }
}

export const updateTodo: RequestHandler = (req, res) => {
  try {
    const todoId = req.body.id
    const updatedTodo = req.body
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

    TODOS[todoIndex] = updatedTodo


    res.json({message: 'Updated!', todos: TODOS})

  } catch (err) {
    throw err
  }
}

export const deleteTodo: RequestHandler<{ id: number }> = (req, res) => {
  try {
    const todoId = req.params.id
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId)

    TODOS.splice(todoIndex, 1)
    res.status(200)
    res.json({ message: `Todo deleted` })

  } catch (err) {
    throw err
  }
}
