import {Todo} from "../../index";
import {Fragment, useEffect} from "react";
import styled from "styled-components";
import Table from "../Table/Table";
import {useGetTodoListQuery} from "../../pages/utils/redux/services/todoQueries";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import axios from "axios";
import {selectNeedsUpdate, setNeedsUpdate} from "../../pages/utils/redux/features/needsUpdate";
import {useDispatch, useSelector} from "react-redux";

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

/**
 *  Handle Delete for specified row item
 * @param id: string
 * returns: void
 */
const handleDelete = (id: string) => {
    console.log(`Delete ${id}`)
    axios.delete(`http://localhost:3000/api/delete-todo?id=${id}`)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
}

/**
 *  Handle Create new todo passed from form
 * @param inputId: string
 * returns: void
 */
const handleCreate = (inputId: string) =>{
    console.log(`Create ${inputId}`)
    // @ts-ignore
    const title = document.getElementById(inputId).value
    axios.post(`http://localhost:3000/api/add-todo?title=${title}`)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
}

const handleUpdate = (inputId: string, status: string) =>{
    console.log(`Update ${inputId}`)
    axios.put(`http://localhost:3000/api/update-todo?status=${status}&id=${inputId}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
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
                        {todo.status_}
                    </td>
                    <td>{todo.title}</td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.updatedAt}</td>
                    <td>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </td>
                    <td>
                        <button onClick={() => handleUpdate(todo.id, todo.status_)}>Edit</button>
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
              <form>
                  <input type="text" aria-label="title" name="title" placeholder="Title" id={"create"}/>
                  <button type="submit" onClick={() => handleCreate("create")}>Create Todo</button>
              </form>
              <Table title={"Todos"} headers={headers} data={parseData(data.todos)} />
          </Styles>
      );
  }
  // Check if error comes from RTK Query
  if (error && isFetchBaseQueryErrorType(error)) {
      // @ts-ignore
      return <p>{error.data.error}</p>
  }
    return <p>Table not Loaded A server error occurred</p>
};