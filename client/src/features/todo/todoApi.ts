import axios from 'axios'
import { TodoStatusEnum } from "./TodoStatusEnum";
import { Todo } from "./Todo";

const baseUrl = 'http://localhost:4000/todo'
const secret = 'shhh-its-a-secret'
const headers = {
    'Authorization': secret
}

export const getAllTodos = () => {
    return axios.get(baseUrl, { headers })
}

export const getArchivedTodos = () => {
    return axios.get(`${baseUrl}/archived`, { headers })
}

export const addTodo = (title: string) => {
    return axios.post(baseUrl, {
        title,
        status: TodoStatusEnum.Active
    }, { headers })
}

export const deleteTodo = (id: string) => {
    return axios.delete(`${baseUrl}/${id}`, {
        headers: {
            ...headers,
            'X-Todo-ID': id
        }
    })
}

export const archiveTodo = (id: string) => {
    return axios.put(`${baseUrl}/archive/${id}`, {}, {
        headers: {
            ...headers,
            'X-Todo-ID': id
        }
    })
}

export const saveTodo = (todo: Todo) => {
    const { id, title, status } = todo

    return axios.put(`${baseUrl}/${id}`, {
        title,
        status
    }, { headers })
}
