import {TodoItem} from "../../index";

export const ToDoItem = (prop: TodoItem) => {
    const {todo} = prop;
    return(
        <>
            <td>todo.status</td>
            <td>{todo.title}</td>
            <td>{todo.lastUpdatedAt}</td>
            <td>{todo.createdAt}</td>
        </>
    )
}