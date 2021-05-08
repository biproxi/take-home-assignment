import * as React from "react"
import { useDispatch, useSelector } from 'react-redux'
import './css/TodoAdd.css'
import { setNewTodo, addTodo } from '../store/actions'
import { Store, Todo, TodoStatusEnum } from '../store/types'
import { addTodoAPI } from '../API'

const TodoInput: React.FC = () => {

    const dispatch = useDispatch()
    const newTodo = useSelector((state: Store) => state.newTodo)
    const time = Math.floor(Date.now() / 1000)

    const addTodoItem = (e: React.FormEvent): void => {
        e.preventDefault()
        const formData: Omit<Todo, 'id'> = {
            title: newTodo,
            status: TodoStatusEnum.Active,
            lastUpdatedAt: time,
            createdAt: time,
        }
        addTodoAPI(formData)
            .then((todo: any) => {
                dispatch(addTodo(todo.data.todo))
            })
            .catch((error: Error) => console.error(error))
    }

    return (
        <form onSubmit={addTodoItem} className='form-control'>
            <input
                placeholder='New todo'
                value={newTodo}
                onChange={(e) => dispatch(setNewTodo(e.target.value))}
            />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default TodoInput