import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

enum TodoStatusEnum {
  Active = 'Active', // the todo has is not completed
  Inactive = 'Inactive', // the todo is completed
  Archived = 'Archived', // the todo is archived (bonus)
}

interface Todo {
  title: string; // the title of the todo
  status: TodoStatusEnum; // the status of the todo
  lastUpdatedAt: number // a unix timestamp representing the time the todo was last updated
  createdAt: number; // a unix timestamp representing the time the todo was created
}

interface TodoLists {
  todos: Todo[];
  archivedTodos: Todo[];
}

//define the initial state
const initialState: TodoLists = {
  todos: [],
  archivedTodos: []
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addNewPost: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload[0])
    },
    getArchived: (state, action: PayloadAction<Todo[]>) => {
      state.archivedTodos = action.payload;
    },
    deletePost: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo: any) => todo.id !== action.payload)
    }
  }
})

export default slice.reducer;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const { getPosts, getArchived, addNewPost, deletePost } = slice.actions;

export const getPostState = () => async dispatch => {
  try{
    const response = await axios.get('/api/getPosts');
    dispatch(getPosts(response.data))
  } catch (err) {
    return console.error(err.message)
  }
}

export const getArchivedState = () => async dispatch => {
  try{
    const response = await axios.get('/api/getArchivedPosts');
    dispatch(getArchived(response.data))
  } catch (err) {
    return console.error(err.message)
  }
}

export const addNewPostState = (title: string) => async dispatch => {
  try{
    const response = await axios.post('/api/addPost', {title});
    dispatch(addNewPost(response.data))
  } catch (err) {
    return console.error(err.message)
  }
}

export const deletePostState = (id: number) => async dispatch => {
  try{
    const response = await axios.delete(`/api/deletePost/?id=${id}`);
    dispatch(deletePost(response.data))
  } catch (err) {
    return console.error(err.message)
  }
}