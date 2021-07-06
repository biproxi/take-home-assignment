import { gql } from '@apollo/client';

export const GET_TODO_BY_ID = gql`
  query GetTodoById($id: String!) {
    returnTodoById(id: $id) {
      status
      id
      title
      createdAt
      lastUpdatedAt
    }
  }
`;

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    returnAllTodos {
      status
      id
      title
      createdAt
      lastUpdatedAt
    }
  }
`;
