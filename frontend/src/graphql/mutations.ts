import {gql} from "@apollo/client";

export const CREATE_TODO = gql`
    mutation Create($data: CreateTodoInput!) {
      createTodo(data: $data) {
        id
        title
        createdAt
      }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateTodo ($data: UpdateTodoInput!, $id: String!) {
      updateTodo(data: $data, id: $id) {
        id
        title
        status
        lastUpdatedAt
      }
    }
`;

export const DELETE_TODO = gql`
    mutation deleteTodo ($id: String!) {
       deleteTodo(id: $id)
    }  
`;