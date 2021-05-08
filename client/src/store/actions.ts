
import { Todo } from "./types";
import { TodoStatusEnum } from './types'

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";

export type ActionTypes = 
    | { type: typeof SET_TODOS; payload: Todo[] }
    | { type: typeof ADD_TODO }
    | { type: typeof DELETE_TODO; payload: number }
    | {
        type: typeof UPDATE_TODO;
        payload: {
        id: number;
        title: string;
        };
    }
    | { type: typeof TOGGLE_TODO; 
        payload: {
            id: number
            status: TodoStatusEnum
        } }
    | { type: typeof SET_NEWTODO; payload: string };

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });

export const deleteTodo = (id: number): ActionTypes => ({
    type: DELETE_TODO,
    payload: id,
});

export const updateTodo = (id: number, title: string): ActionTypes => ({
    type: UPDATE_TODO,
    payload: {
    id,
    title,
    },
});

export const toggleTodo = (id: number, status: TodoStatusEnum): ActionTypes => ({
    type: TOGGLE_TODO,
    payload: {
        id,
        status
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
