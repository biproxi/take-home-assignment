import * as React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './css/TodoAdd.css'
import { setNewTodo, addTodo } from '../store/actions'
import { Store, Todo, TodoStatusEnum } from '../store/types'
import { addTodoAPI } from '../API'

const TodoInput: React.FC = () => {

    const dispatch = useDispatch()
    const newTodo = useSelector((state: Store) => state.newTodo)

    const addTodoItem = (): void => {
        const formData: Omit<Todo, "id"> = {
            title: newTodo,
            status: TodoStatusEnum.Active,
            lastUpdatedAt: Math.floor(Date.now() / 1000),
            createdAt: Math.floor(Date.now() / 1000),
        };
        addTodoAPI(formData)
            .then(() => {
                dispatch(addTodo())
            })
    }

    return (
        <div className="form-control">
            <input
                placeholder="New todo"
                value={newTodo}
                onChange={(e) => dispatch(setNewTodo(e.target.value))}
            />
            <button onClick={addTodoItem}>Add Todo</button>
        </div>
    )
}

export default TodoInput