import { createSlice} from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {TodoList} from "../../../../index";

const initialState: TodoList = {
  todos: [],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {

  },
})

// export const selectTodoList = (state: RootState) => state.todoList
export default todoListSlice.reducer