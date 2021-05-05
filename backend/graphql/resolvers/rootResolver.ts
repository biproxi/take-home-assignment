import {TodoQueries, TodoMutation} from './todo'

/**
 * The main GraphQL resolver for this application
 * Uses helper resolvers that query the mongo database
 */
export const resolvers = {
    Query: {
        ...TodoQueries
    },
    Mutation: {
        ...TodoMutation
    }
}