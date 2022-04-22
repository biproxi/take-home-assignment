import {Todo, TodoList} from "../../index";
import {ChangeEvent, Fragment} from "react";
import styled from "styled-components";
import Table from "../Table/Table";
import {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodoListQuery,
    useUpdateTodoTitleMutation,
    useUpdateTodoStatusMutation
} from "../../pages/utils/redux/services/todoQueries";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

const StyledDiv = styled.div`
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
 * @param deleteTodo: Function
 * returns: void
 */
const handleDelete = (id: string, deleteTodo: Function) => {
    console.log(`Delete ${id}`)
    deleteTodo({id})
}

/**
 *  Handle Create new todo passed from form
 * @param inputId: string
 * @param addTodo: Function
 * returns: void
 *
 */
const handleCreate = (inputId: string, addTodo: Function) =>{
    console.log(`Create ${inputId}`)
    // @ts-ignore
    const title = document.getElementById(inputId).value
    addTodo({title})
}

/**
 *  Handle Update for specified row item
 * @param event
 * @param id: string
 * @param updateTodoStatus
 * @param updateTodoTitle: Function
 * returns: void
 * @param updateType
 */
const handleUpdate = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string, updateTodoTitle: Function, updateTodoStatus: Function, updateType: string) =>{
    if (updateType === 'title'){
        console.log(`Update ${id} title to ${event.target.value}`)
        updateTodoTitle({id, title: event.target.value})
    } else if (updateType === 'status'){
        console.log(`Update ${id} status to ${event.target.value}`)
        updateTodoStatus({id, status_: event.target.value })
    }
}
/**
 * Parse the todo list into table rows
 * @param todoList: TodoListProps
 * @param deleteTodo: Function
 * @param updateTodoTitle
 * @param updateTodoStatus
 * @returns JSX.Element
 */
const parseData = (todoList: TodoList, deleteTodo: Function, updateTodoTitle: Function, updateTodoStatus: Function) => { // TODO: Fix type
    if (todoList.length === 0) {
        return <tr><td>No todos</td></tr>
    }
    return todoList.map((todo: Todo) => {
        return (
            <Fragment key={todo.id}>
                <tr className={todo.id}>
                    <td>
                        <select defaultValue={todo.status_} onChange={(event) =>
                            handleUpdate(event,todo.id, updateTodoTitle, updateTodoStatus, 'status')}
                        >
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                            <option value='Archived'>Archived</option>
                        </select>
                    </td>
                    <td>
                        <input defaultValue={todo.title} onChange={(event) =>
                            handleUpdate(event,todo.id, updateTodoTitle, updateTodoStatus, 'title')}/>

                    </td>
                    <td>{todo.createdAt}</td>
                    <td>{todo.updatedAt}</td>
                    <td>
                        <button onClick={() => handleDelete(todo.id, deleteTodo)}>Delete</button>
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
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodoTitle] = useUpdateTodoTitleMutation();
  const [updateTodoStatus] = useUpdateTodoStatusMutation();

  if (isLoading) {
      return <p>Loading...</p>
  }
  if(data) {
      return (
          <StyledDiv>
              <h1>ToDo List</h1>
              <form>
                  <input type="text" aria-label="title" name="title" placeholder="Title" id={"create"}/>
                  <button type="submit" onClick={() => handleCreate("create", addTodo)}>Create Todo</button>
              </form>
              <Table title={"Todos"} headers={headers} data={parseData(data.todos, deleteTodo, updateTodoTitle, updateTodoStatus)} />
          </StyledDiv>
      );
  }
  // Check if error comes from RTK Query
  if (error && isFetchBaseQueryErrorType(error)) {
      // @ts-ignore
      return <p>{error.data.error}</p>
  }
    return <p>Table not Loaded A server error occurred</p>
};