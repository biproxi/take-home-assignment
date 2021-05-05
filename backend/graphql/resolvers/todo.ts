import mongoose from 'mongoose'
import { ITodo } from '../../types/todoInterface'
import Todo from '../../models/Todo'

/**
 * Helper resolver that queries the mongo database
 */
export const TodoQueries = {
    getTodo: async (__: any): Promise<ITodo[]> => {
        try {
            const todos: ITodo[] = await Todo.find()
            return todos
        } catch(error) {
            throw error;
        }
    }
}

/**
 * Helper resolver that mutates data within the database
 */
export const TodoMutation = {
    createTodo: async (__: any, {todoInfo}: any): Promise<{ msg: string, todo: ITodo}> => {
        try {
            const info = todoInfo as Pick<ITodo, "title" | "status" | "lastUpdatedAt" | "createdAt">

            const todo: ITodo = new Todo({
                title: info.title,
                status: info.status,
                lastUpdatedAt: info.lastUpdatedAt,
                createdAt: info.createdAt
            })

            const newTodo: ITodo = await todo.save();

            return {
                msg: "todo added successfully",
                todo: newTodo
            }
        } catch(error) {
            throw error;
        }
    },
    deleteTodo: async(__: any, {todoId}: number): Promise<{ msg: string, todo: ITodo}> => {
        try {
            const deletedTodo: ITodo | null = await Todo.findByIdAndRemove(todoId)
            return {
                msg: "todo successfully deleted",
                todo: deletedTodo
            }
        } catch(error) {
            throw error;
        }
    }
}