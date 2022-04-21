import {TodoListProps} from "../../index";
import {useState} from "react";
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

export const ToDoList= (props: TodoListProps) => {
  const [todos] = useState(props.todos);
  const headers = ["Status", "Title", "Created At", "Completed"];
  return (
    <Styles>
      <h1>ToDo List</h1>
      <Table headers={headers} todos={todos}/>
    </Styles>
  );
};