import {TodoItem} from "../../index";

export const ToDoItem = (prop: TodoItem) => {
    const {todo} = prop;
    return(
        <li>{todo.title}</li>
    )
}