import axios, { AxiosResponse } from "axios"
import { Todo, TodoStatusEnum } from "../Models/models"

/**
 * Hook that hits the route for retrieving todos from the database
 * @returns {AxiosResponse} list of todos
 */
const getTodosHook = async(): Promise<AxiosResponse<any> | undefined> => {
    try {
        const todoList: AxiosResponse<any> = await axios.get("http://localhost:4020/todos")
        return todoList
    } catch(error) {
        console.error("There was an error fetching the data :'( : ", error)
    }
}

/**
 * Hook that hits the route responsible for adding a new todo list to database
 * @param formData {Todo}
 * @returns {AxiosResponse} object containing http status, message, and data
 */
const addTodoHook = async(formData: Todo | any): Promise<AxiosResponse<any> | undefined> => {
    try {
        const addTodo : AxiosResponse<any> = await axios.post("http://localhost:4020/newTodo", formData)
        return addTodo;
    } catch(error) {
        console.error("There was an error posting the data :'( : ", error)
    }
}

/**
 * Hook that hits the route responsible for updating a todo within the database
 * @param todoItem {Todo} 
 * @returns {AxiosResponse} object containing http status, message, and data
 */
const updateTodoHook = async(todoItem: Todo | any) : Promise<AxiosResponse<any> | undefined> => {
    try {
        const updatedTodo: AxiosResponse<any> = await axios.put(`http://localhost:4020/editTodo/${todoItem._id}`, todoItem)
        return updatedTodo
    } catch(error) {
        console.error("There was an error posting the data :'( : ", error)
    }
}

/**
 * Hook that hits the route responsible for deleting a todo within the database
 * @param id {string}
 * @returns {AxiosResponse} object containing http status, message, and data
 */
const deleteTodoHook = async(id: string | undefined): Promise<AxiosResponse<any> | undefined> => {
    try {
        const deleteTodo: AxiosResponse<any> = await axios.delete(`http://localhost:4020/deleteTodo/${id}`)
        return deleteTodo
    } catch(error) {
        console.error("There was an error posting the data :'( : ", error)
    }
}
export { getTodosHook, addTodoHook, updateTodoHook, deleteTodoHook }