import { gql } from "apollo-server-express"

export const typeDefs = gql`
    type Query {
        getTodo: [ITodo!]!
    }

    type Mutation {
        createTodo(todoInfo: ITodo): ToDoInfo!
        deleteTodo(todoId: ID!): ToDoInfo!
    }
    type ToDoInfo {
        _id: ID!
        title: String!
        status: TodoStatusEnum
        createdAt: String!
        updatedAt: String!
    }
`;