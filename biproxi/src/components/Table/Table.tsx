import {TableProps, Todo} from "../../index";
import {ToDoItem} from "../ToDoItem/ToDoItem";

const parseData = (todoList: Todo[]) => {
    if (todoList.length === 0) {
        return <p>No todos</p>
    }
    return todoList.map((todo: Todo) => {
        return <ToDoItem key={todo.createdAt} todo={todo}/>
    })
};
const Table = (props: TableProps) => {
    const {headers, todos} = props;
  return (
    <table>
        <thead>
        <tr>
            {headers.map((header: string) => {
                return <th key={header}>{header}</th>
            })}
        </tr>
        </thead>
        <tbody>
        {parseData(todos)}
        </tbody>
      </table>
  )
};

export default Table;