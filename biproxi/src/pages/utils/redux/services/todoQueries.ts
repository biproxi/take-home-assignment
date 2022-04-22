// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Todo} from "../../../../index";

// Define a service using a base URL and expected endpoints

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery(
      { baseUrl: '/api/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => `get-all-todos`,
      providesTags: (result, error, arg) =>

          result
          ? // @ts-ignore
              [...result.todos.map(({ id }) => ({ type: 'Todo' as const, id })), 'Todo']
          : [],
    }),
    addTodo: builder.mutation<Todo, Todo>({
      query: ({ title }) => ({
        url: `add-todo?title=${title}`,
        method: 'POST',
      }),
      invalidatesTags: ['Todo'],
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodoListQuery, useAddTodoMutation } = todoApi