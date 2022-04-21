import {Todo, TodoListProps} from "../../index";
import {Fragment, useState} from "react";
import styled from "styled-components";
import Table from "../Table/Table";

const Styles = styled.div`
  padding: 1rem;
  
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const testTodos = {
    todos: [
        {
            id: "1",
            status: "Active",
            title: "Todo One",
            createdAt: 1,
            lastUpdatedAt: 1
        },
        {
            id: "2",
            status: "Active",
            title: "Todo Two",
            createdAt: 2,
            lastUpdatedAt: 2
        },
        {
            id: "3",
            status: "Active",
            title: "Todo Three",
            createdAt: 3,
            lastUpdatedAt: 3
        }
    ]
}
const parseData = (todoList: any) => {
    if (todoList.length === 0) {
        return <p>No todos</p>
    }
    return todoList.map((todo: Todo) => {
        return (
            <Fragment key={todo.id}>
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.status}</td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.lastUpdatedAt}</td>
                </tr>
            </Fragment>
        );
    })
};
export const ToDoList= (props: TodoListProps) => {
  const [todos] = useState(props.todos);
  const headers = ["Status", "Title", "Created At", "Last Updated"];
  return (
    <Styles>
      <h1>ToDo List</h1>
      <Table headers={headers} data={parseData(testTodos.todos)}/>
    </Styles>
  );
};