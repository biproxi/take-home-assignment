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
  title: string,
  status: string
}

//define the initial state
const initialState: TodoLists = {
  todos: [],
  archivedTodos: [],
  title: '',
  status: ''
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addNewPost: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload]
    },
    getArchived: (state, action: PayloadAction<Todo[]>) => {
      state.archivedTodos = action.payload;
    },
    deletePost: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.filter((todo: any) => todo.id !== action.payload)
    },
    getUpdatedTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    getUpdatedStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    }
  }
})

export default slice.reducer;

//actions
const { getPosts,
        getArchived,
        addNewPost,
        deletePost,
        getUpdatedTitle,
        getUpdatedStatus } = slice.actions;

export const getPostState = () => async (dispatch: any) => {
  try{
    const response = await axios.get('/api/getPosts');
    dispatch(getPosts(response.data))
  } catch (err) {
    return console.error(err.message)
  }
};

export const getArchivedState = () => async (dispatch: any) => {
  try{
    const response = await axios.get('/api/getArchivedPosts');
    dispatch(getArchived(response.data))
  } catch (err) {
    return console.error(err.message)
  }
};

export const addNewPostState = (title: string) => async (dispatch: any) => {
  try{
    const response = await axios.post('/api/addPost', {title});
    dispatch(addNewPost(response.data))
  } catch (err) {
    return console.error(err.message)
  }
};

export const deletePostState = (id: number) => async (dispatch: any) => {
  try{
    const response = await axios.delete(`/api/deletePost/?id=${id}`);
    dispatch(deletePost(response.data))
  } catch (err) {
    return console.error(err.message)
  }
};

export const updateFormTitle = (title: string) => (dispatch: any) => {
  dispatch(getUpdatedTitle(title))
};

export const updateFormStatus = (status: string) => (dispatch: any) => {
  dispatch(getUpdatedStatus(status))
};