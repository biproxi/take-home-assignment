import { Todo } from './store/types'
import axios, { AxiosResponse } from 'axios'
import { TodoStatusEnum } from './store/types'

const baseUrl: string = 'http://localhost:4000'
const time: number = Math.floor(Date.now() / 1000)

export const getTodosAPI = async (): Promise<AxiosResponse<Todo[]>> => {
  try {
    const todos: AxiosResponse<Todo[]> = await axios.get(
      baseUrl + '/todos'
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodoAPI = async (
  formData: Omit<Todo, 'id'>
): Promise<AxiosResponse<Todo[]>> => {
  try {
    const todo: Omit<Todo, 'id'> = {
      title: formData.title,
      status: TodoStatusEnum.Active,
      lastUpdatedAt: time,
      createdAt: time
    }
    const saveTodo: AxiosResponse<Todo[]> = await axios.post(
      baseUrl + '/todos',
      todo
    )
    return saveTodo
  } catch (error) {
    throw new Error(error)
  }
}

export const updateTodoAPI = async (
  todo: Todo
): Promise<AxiosResponse<any>> => {
  try {
    const updatedTodo: AxiosResponse<Todo[]> = await axios.put(
      `${baseUrl}/todos/${todo.id}`,
      todo
    )
    return updatedTodo
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteTodoAPI = async (
  id: number
): Promise<AxiosResponse<Todo[]>> => {
  try {
    const deletedTodo: AxiosResponse<any> = await axios.delete(
      `${baseUrl}/todos/${id}`
    )
    return deletedTodo
  } catch (error) {
    throw new Error(error)
  }
}