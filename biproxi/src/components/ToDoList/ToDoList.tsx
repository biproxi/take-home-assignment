import {Todo} from "../../index";
import {Fragment} from "react";
import styled from "styled-components";
import Table from "../Table/Table";
import {useGetTodoListQuery} from "../../pages/utils/redux/services/todos";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

const Styles = styled.div`
  width: 1000px;
  padding: 1rem;
  margin: auto;
  h2 {
    text-align: center;
  }
  table {
    border-spacing: 0;
    border: 1px solid black;
    margin: auto;
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

// TODO: Add Delete Logic
/**
 *  Handle Delete for specified row item
 * @param id: string
 * returns: void
 */
const handleDelete = (id: string) => {
    console.log(`Delete ${id}`)
}

/**
 * Parse the todo list into table rows
 * @param todoList: TodoListProps
 * @returns JSX.Element
 */
const parseData = (todoList: any) => { // TODO: Fix type
    if (todoList.length === 0) {
        return <p>No todos</p>
    }
    return todoList.map((todo: Todo) => {
        return (
            <Fragment key={todo.id}>
                <tr className={todo.id}>
                    <td>
                        <select defaultValue={todo.status_}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Archived">Archive</option>
                        </select>
                    </td>
                    <td>{todo.title}</td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.updatedAt}</td>
                    <td>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </td>
                </tr>
            </Fragment>
        );
    })
};

/**
 * Type Guard for RTK Query errors
 * @param error: any
 */
const isFetchBaseQueryErrorType = (error: any): error is FetchBaseQueryError => 'status' in error

export const ToDoList= () => {
  const headers = ["Status", "Title", "Created At", "Last Updated", ""];
  const {data, isLoading, error} = useGetTodoListQuery('');

  if (isLoading) {
      return <p>Loading...</p>
  }
  if(data) {
      return (
          <Styles>
              <h1>ToDo List</h1>
              <Table title={"Todos"} headers={headers} data={parseData(data.todos)}/>
          </Styles>
      );
  }
  if (error && isFetchBaseQueryErrorType(error)) {
      // Check for error type
      // @ts-ignore
      return <p>{error.data.error}</p>
  }
    return <p>Table not Loaded A server error occurred</p>
};