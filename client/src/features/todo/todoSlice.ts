import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Todo } from "./Todo";
import { addTodo, archiveTodo, deleteTodo, getAllTodos, getArchivedTodos, saveTodo } from "./todoApi";
import { TodoStatusEnum } from "./TodoStatusEnum";

export interface TodoState {
    todos: Todo[]
    archive: Todo[]
    status: 'idle' | 'loading' | 'failed';
    newTitle?: string;
    todoToEdit?: Todo
}

export const initialState: TodoState = {
    todos: [],
    archive: [],
    status: 'idle',
    newTitle: ''
}

export const getAllTodosAsync = createAsyncThunk(
    'todo/getAll',
    async () => {
        try {
            const response = await getAllTodos();
            return response.data;
        } catch (error) {
            throw error
        }
    }
);

export const getArchivedTodosAsync = createAsyncThunk(
    'todo/getArchived',
    async () => {
        try {
            const response = await getArchivedTodos();
            return response.data;
        } catch (error) {
            throw error
        }
    }
);

export const addTodoAsync = createAsyncThunk(
    'todo/add',
    async (title: string) => {
        try {
            const response = await addTodo(title);
            return response.data;
        } catch (error) {
            throw error
        }
    }
);

export const deleteTodoAsync = createAsyncThunk(
    'todo/delete',
    async (id: string) => {
        try {
            const response = await deleteTodo(id);
            return response.config.headers['X-Todo-ID'];
        } catch (error) {
            throw error
        }
    }
);

export const archiveTodoAsync = createAsyncThunk(
    'todo/archive',
    async (id: string) => {
        try {
            const response = await archiveTodo(id);
            return response.config.headers['X-Todo-ID'];
        } catch (error) {
            throw error
        }
    }
);

export const saveTodoAsync = createAsyncThunk(
    'todo/save',
    async (todo: Todo) => {
        try {
            await saveTodo(todo);
            return todo;
        } catch (error) {
            throw error
        }
    }
);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setNewTitle(state, action) {
            state.newTitle = action.payload
        },
        editTodo(state, action) {
            state.todoToEdit = action.payload
        },
        editTodoTitle(state, action) {
            if (state.todoToEdit) {
                state.todoToEdit.title = action.payload
            }
        },
        editTodoStatus(state, action) {
            if (state.todoToEdit) {
                state.todoToEdit.status = action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodosAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllTodosAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = action.payload;
            })
            .addCase(getAllTodosAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(getArchivedTodosAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArchivedTodosAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.archive = action.payload;
            })
            .addCase(getArchivedTodosAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(deleteTodoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            })
            .addCase(deleteTodoAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(archiveTodoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            status: TodoStatusEnum.Archived
                        }
                    }
                    return todo
                }).filter(todo => todo.status !== TodoStatusEnum.Archived);
            })
            .addCase(archiveTodoAsync.rejected, (state) => {
                state.status = 'failed';
            })

            .addCase(saveTodoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return action.payload
                    }
                    return todo
                })
                state.todoToEdit = undefined
            })
            .addCase(saveTodoAsync.rejected, (state) => {
                state.status = 'failed';
            })

    },
});

export const { setNewTitle, editTodo, editTodoTitle, editTodoStatus } = todoSlice.actions;

export const selectAllTodos = (state: RootState) => state.todo.todos;
export const selectAllTodosStatus = (state: RootState) => state.todo.status;
export const selectArchivedTodos = (state: RootState) => state.todo.archive;
export const selectNewTitle = (state: RootState) => state.todo.newTitle;
export const selectTodoToEdit = (state: RootState) => state.todo.todoToEdit;

export default todoSlice.reducer;
