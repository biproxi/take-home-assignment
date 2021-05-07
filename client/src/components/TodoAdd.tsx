import * as React from "react";
import { useDispatch, useSelector } from 'react-redux'
import './css/TodoAdd.css'
import { setNewTodo, addTodo } from '../store/actions'
import { Store } from '../store/types'

const TodoInput: React.FC = () => {

    const dispatch = useDispatch()
    const newTodo = useSelector((state: Store) => state.newTodo)

    return (
        <div className="form-control">
            <input
                placeholder="New todo"
                value={newTodo}
                onChange={(e) => dispatch(setNewTodo(e.target.value))}
            />
            <button onClick={() => dispatch(addTodo())}>Add Todo</button>
        </div>
    )
}

export default TodoInput