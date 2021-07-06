import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($data: CreateTodoInput) {
    createTodo(data: $data) {
      status
      id
      title
      createdAt
      lastUpdatedAt
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($data: UpdateTodoInput) {
    updateTodo(data: $data)
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String) {
    deleteTodo(id: $id)
  }
`;
