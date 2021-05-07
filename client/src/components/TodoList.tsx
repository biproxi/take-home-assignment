import React from 'react'
import './css/TodoList.css'

import { useDispatch, useSelector } from 'react-redux'
import { Store } from '../store/types'
import { deleteTodo, toggleTodo, updateTodo } from "../store/actions";
import { TodoStatusEnum } from '../store/types'

const TodoListItems: React.FC = () => {

    const todos = useSelector((state: Store) => state.todos)
    const dispatch = useDispatch()
    
    const toggleStatus = (todo: any) => {
      const updatedTodo = {... todo}
      updatedTodo.status = (todo.status === TodoStatusEnum.Active ? TodoStatusEnum.Inactive : TodoStatusEnum.Active)
      dispatch(toggleTodo(updatedTodo.id, updatedTodo.status))
    }

    return (
      <ul>
        {todos.map((todo: { id: number; text: string; status: TodoStatusEnum }) => (
            <li key={todo.id}>
                <input value={todo.text} onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}/>
                <button onClick={() => toggleStatus(todo)}>{todo.status}</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
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