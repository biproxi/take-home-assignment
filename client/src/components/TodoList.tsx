import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './css/TodoList.css'
import { deleteTodo, toggleTodo, updateTodo, setTodos } from '../store/actions'
import { TodoStatusEnum, Store, Todo } from '../store/types'
import { getTodosAPI, updateTodoAPI, deleteTodoAPI } from '../API'

const TodoListItems: React.FC = () => {

    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    useEffect(() => getTodoList(), [])
    const time = Math.floor(Date.now() / 1000)

    const getTodoList = () => {
      getTodosAPI()
        .then(({ todos: { todos } }: Todo[] | any) => {
          dispatch(setTodos(todos))
        })
        .catch((error: Error) => console.error(error))
    }
    
    const toggleStatus = (todo: any) => {
      const updatedTodo = {... todo}
      updatedTodo.status = (todo.status === TodoStatusEnum.Active ? TodoStatusEnum.Inactive : TodoStatusEnum.Active)
      updatedTodo.lastUpdatedAt = time
      updateTodoAPI(updatedTodo)
        .then(() => {
          dispatch(toggleTodo(updatedTodo.id, updatedTodo.status, updatedTodo.lastUpdatedAt))
        })
        .catch((error: Error) => console.log(error))
    }

    const updateTodoTitle = (todo: any, e: any) => {
      const updatedTodo = {... todo}
      updatedTodo.title = e
      updatedTodo.lastUpdatedAt = time
      updateTodoAPI(updatedTodo)
        .then(() => {
          dispatch(updateTodo(updatedTodo.id, updatedTodo.title, updatedTodo.lastUpdatedAt))
        })
        .catch((error: Error) => console.log(error))
    }

    const deleteTodoItem = (id: number) => {
      deleteTodoAPI(id)
        .then(() => {
          dispatch(deleteTodo(id))
        })
        .catch((error: Error) => console.error(error));
    }

    return (
      <ul>
        {todos.map((todo: { id: number; title: string; status: TodoStatusEnum }) => (
            <li key={todo.id}>
                <input value={todo.title} onChange={(e) => updateTodoTitle(todo, e.target.value)}/>
                <button className={todo.status} onClick={() => toggleStatus(todo)}>{todo.status}</button>
                <span id="deleteBtn" onClick={() => deleteTodoItem(todo.id)}>❌</span>
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