"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTodos = exports.edit = exports.remove = exports.toggle = exports.create = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var todo_1 = require("types/todo");
var initialState = [
    {
        title: "test data1",
        status: todo_1.TodoStatusEnum.Active,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000),
    },
    {
        title: "test data2",
        status: todo_1.TodoStatusEnum.Active,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000) + 45,
    },
    {
        title: "test data3",
        status: todo_1.TodoStatusEnum.Inactive,
        lastUpdatedAt: Math.floor(Date.now() / 1000),
        createdAt: Math.floor(Date.now() / 1000) + 12,
    },
];
var TodoSlice = toolkit_1.createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        create: function (state, action) {
            state.push(action.payload);
        },
        remove: function (state, action) {
            var index = state.findIndex(function (todo) { return todo.createdAt === action.payload; });
            state.splice(index, 1);
        },
        edit: function (state, action) {
            var todo = state.find(function (item) { return item.createdAt === action.payload.createdAt; });
            if (todo) {
                todo.title = action.payload.title;
                todo.lastUpdatedAt = action.payload.lastUpdatedAt;
            }
            else {
                return todo;
            }
        },
        toggle: function (state, action) {
            var todo = state.find(function (item) { return item.createdAt === action.payload; });
            if (todo) {
                if (todo.status === todo_1.TodoStatusEnum.Active) {
                    todo.status = todo_1.TodoStatusEnum.Inactive;
                }
                else {
                    todo.status = todo_1.TodoStatusEnum.Active;
                }
            }
            else {
                return state;
            }
        },
    },
});
exports.create = (_a = TodoSlice.actions, _a.create), exports.toggle = _a.toggle, exports.remove = _a.remove, exports.edit = _a.edit;
// grabs the store abd
var selectTodos = function (state) { return state.todos; };
exports.selectTodos = selectTodos;
exports.default = TodoSlice.reducer;
