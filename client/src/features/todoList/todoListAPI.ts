import { Todo } from "./todoListSlice";

const route = 'http://localhost:8081/api/todos';


export async function fetchTodoList(): Promise<Todo[]> {
  const res = await fetch(route)
  if (res.status === 200) {
    const data = await res.json()
    console.log(data)
    return data
  } else {
    console.error(res)
    // lazy but visible error handling
    return [{ id: 777777, title: `${res.status} GET ALL TODO DIDN'T WORK!`}] as Todo[]
  }
}

export async function updateTodoItem(todo: Todo): Promise<Todo> {
  const req: RequestInit  = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({todo})
  }

  const url = `${route}/${todo.id}`;
  const res = await fetch(url, req);
  
  if (res.status === 200) {
    const data = await res.json()
    console.log(data)
    return data
  } else {
    console.error(res)
    // lazy but visible error handling
    return { id: todo.id, title: `${res.status} UPDATE TODO DIDN'T WORK!`} as Todo
  }
}

export async function saveNewTodoItem(title: string) {
  const req: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title})
  }

  const res = await fetch(route, req);
  
  if (res.status === 200) {
    const data = await res.json()
    console.log(data)
    return data
  } else {
    // lazy but visible error handling
    return { title: `${res.status} CREATE NEW TODO DIDN'T WORK!`} as Todo
  }
}

export async function deleteTodoItem(todo: Todo) {
  const url = `${route}/${todo.id}`;
  const req = { method: 'DELETE' }
  const res = await fetch(url, req);
  
  if (res.status === 200) {
    const data = await res.json()
    console.log(data)
    return data
  } else {
    // lazy but visible error handling
    return { title: `${res.status} DELETE TODO DIDN'T WORK!`} as Todo
  }
}