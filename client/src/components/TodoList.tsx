import React, { useEffect } from 'react'
import './css/TodoList.css'

import { useDispatch, useSelector } from 'react-redux'
import { Store } from '../store/types'
import { deleteTodo, toggleTodo, updateTodo, setTodos } from "../store/actions";
import { TodoStatusEnum } from '../store/types'
import { getTodosAPI, updateTodoAPI, deleteTodoAPI } from '../API'
import { Todo } from '../store/types'

const TodoListItems: React.FC = () => {

    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    useEffect(() => getTodoList(), [])

    const getTodoList = () => {
      getTodosAPI()
      .then(({ todos: { todos } }: Todo[] | any) => {
        dispatch(setTodos(todos))
      })
      .catch((error: Error) => console.error(error));
    }
    
    const toggleStatus = (todo: any) => {
      const updatedTodo = {... todo}
      updatedTodo.status = (todo.status === TodoStatusEnum.Active ? TodoStatusEnum.Inactive : TodoStatusEnum.Active)
      updatedTodo.lastUpdatedAt = Math.floor(Date.now() / 1000)
      updateTodoAPI(updatedTodo)
        .then(() => {
          dispatch(toggleTodo(updatedTodo.id, updatedTodo.status))
        })
        .catch((error: Error) => console.log(error))
    }

    const updateTodoTitle = (todo: any, e: any) => {
      const updatedTodo = {... todo}
      updatedTodo.title = e
      updatedTodo.lastUpdatedAt = Math.floor(Date.now() / 1000)
      updateTodoAPI(updatedTodo)
      .then(() => {
        dispatch(updateTodo(updatedTodo.id, updatedTodo.title))
      })
      .catch((error: Error) => console.log(error))
    }

    const deleteTodoItem = (id: number) => {
      deleteTodoAPI(id)
        .then(() => {
          dispatch(deleteTodo(id))
        })
    }

    return (
      <ul>
        {todos.map((todo: { id: number; title: string; status: TodoStatusEnum }) => (
            <li key={todo.id}>
                <input value={todo.title} onChange={(e) => updateTodoTitle(todo, e.target.value)}/>
                <button onClick={() => toggleStatus(todo)}>{todo.status}</button>
                <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
            </li>
        ))}
      </ul>
    )
}

function TodoList() {
    return (
        <TodoListItems />
    )
  }
  
  export default TodoList;