
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { TodoStatusEnum, Store, Todo } from './types'

import {
  ActionTypes,
  SET_TODOS,
  DELETE_TODO,
  SET_NEWTODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  ADD_TODO,
} from './actions'

export const updateTodo = (todos: Todo[], id: number, title: string, lastUpdatedAt: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
    lastUpdatedAt: todo.lastUpdatedAt
  }));

export const toggleTodo = (todos: Todo[], id: number, status: TodoStatusEnum, lastUpdatedAt: number): Todo[] => 
    todos.map((todo) => ({
        ...todo,
        status: todo.id === id ? status : todo.status,
        lastUpdatedAt: todo.lastUpdatedAt
    }))

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], todo: Todo): Todo[] => [
  ...todos, todo
]

// Redux implementation
function todoReducer(
    state: Store = {
      todos: [],
      newTodo: '',
    },
    action: ActionTypes
  ) {
    switch (action.type) {
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload,
        }
      case SET_NEWTODO:
        return {
          ...state,
          newTodo: action.payload,
        }
      case UPDATE_TODO:
        return {
          ...state,
          todos: updateTodo(state.todos, action.payload.id, action.payload.title, action.payload.lastUpdatedAt),
        }
      case TOGGLE_TODO:
        return {
          ...state,
          todos: toggleTodo(state.todos, action.payload.id, action.payload.status, action.payload.lastUpdatedAt),
        }
      case DELETE_TODO:
        return {
          ...state,
          todos: removeTodo(state.todos, action.payload),
        }
      case ADD_TODO:
        return {
          ...state,
          newTodo: '',
          todos: addTodo(state.todos, action.payload),
        }
      default:
        return state;
    }
  }
  
  const store = createStore(todoReducer, applyMiddleware(thunk))
  
  export default store

