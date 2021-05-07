import { Todo } from "./todoListSlice";
import axios, { AxiosRequestConfig } from 'axios'


const route = process.env.NODE_ENV === "development" ? 'http://localhost:8081/api/todos' : '/api/todos'

const defaultOpts: AxiosRequestConfig = Object.freeze({
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
})


export async function fetchTodoList(): Promise<Todo[]> {
  const res = await axios.get(route)
  if (res.status === 200) {
    console.log(res.data)
    return res.data
  } else {
    console.error(res)
    // lazy but visible error handling
    return [{ id: 777777, title: `${res.status} GET ALL TODO DIDN'T WORK!`}] as Todo[]
  }
}

export async function updateTodoItem(todo: Todo): Promise<Todo> {
  const url = `${route}/${todo.id}`;
  const res = await axios.put(url, {todo}, defaultOpts);
  
  if (res.status === 200) {
    console.log(res.data)
    return res.data
  } else {
    console.error(res)
    // lazy but visible error handling
    return { id: todo.id, title: `${res.status} UPDATE TODO DIDN'T WORK!`} as Todo
  }
}

export async function saveNewTodoItem(title: string) {
  const res = await axios.post(route, JSON.stringify({title}), defaultOpts)
  
  if (res.status === 200) {
    console.log(res.data)
    return res.data
  } else {
    // lazy but visible error handling
    return { title: `${res.status} CREATE NEW TODO DIDN'T WORK!`} as Todo
  }
}

export async function deleteTodoItem(todo: Todo) {
  const url = `${route}/${todo.id}`;
  const res = await axios.delete(url);
  
  if (res.status === 200) {
    console.log(res.data)
    return res.data
  } else {
    // lazy but visible error handling
    return { title: `${res.status} DELETE TODO DIDN'T WORK!`} as Todo
  }
}