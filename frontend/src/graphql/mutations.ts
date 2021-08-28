import {gql} from "@apollo/client";

export const CREATE_TODO = gql`
    mutation Create($data: CreateTodoInput!) {
      createTodo(data: $data) {
        id
      }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateTodo {
      updateTodo(
        data: {
        title: "Poop on me"
      }, id: "1") {
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