import React, { useRef } from 'react'
import './css/NewTodo.css'

interface NewTodoProps {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const newTodoItem = textInputRef.current!.value
        props.onAddTodo(newTodoItem)
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo