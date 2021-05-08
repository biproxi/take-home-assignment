import { TodoStatusEnum, Todo } from './types'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_NEWTODO = 'SET_NEWTODO'
export const SET_TODOS = 'SET_TODOS'

export type ActionTypes = 
    | { type: typeof SET_TODOS; payload: Todo[] }
    | { type: typeof ADD_TODO; payload: any}
    | { type: typeof DELETE_TODO; payload: number }
    | {
        type: typeof UPDATE_TODO;
        payload: {
            id: number
            title: string
            lastUpdatedAt: number
        }
    }
    | { type: typeof TOGGLE_TODO; 
        payload: {
            id: number
            status: TodoStatusEnum
            lastUpdatedAt: number
        } }
    | { type: typeof SET_NEWTODO; payload: string };

export const addTodo = (todo: any): ActionTypes => ({ 
    type: ADD_TODO,
    payload: todo });

export const deleteTodo = (id: number): ActionTypes => ({
    type: DELETE_TODO,
    payload: id,
});

export const updateTodo = (id: number, title: string, lastUpdatedAt: number): ActionTypes => ({
    type: UPDATE_TODO,
    payload: {
        id,
        title,
        lastUpdatedAt
    },
});

export const toggleTodo = (id: number, status: TodoStatusEnum, lastUpdatedAt: number): ActionTypes => ({
    type: TOGGLE_TODO,
    payload: {
        id,
        status,
        lastUpdatedAt
    },
});

export const setNewTodo = (title: string): ActionTypes => ({
    type: SET_NEWTODO,
    payload: title,
});

export const setTodos = (todos: Todo[]): ActionTypes => ({
    type: SET_TODOS,
    payload: todos,
});
