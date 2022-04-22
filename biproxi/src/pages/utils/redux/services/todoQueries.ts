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
    deleteTodo: builder.mutation<Todo, Todo>({
      query: ({ id }) => ({
        url: `delete-todo?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodoTitle: builder.mutation<Todo, Todo>({
      query: ({ id, title}) => ({
        url: `update-todo?id=${id}&title=${title}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodoStatus: builder.mutation<Todo, Todo>({
      query: ({ id, status_}) => ({
        url: `update-todo?id=${id}&status=${status_}`,
        method: 'PUT',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodoListQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoTitleMutation,
  useUpdateTodoStatusMutation,
} = todoApi