"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var TodosSlice_1 = require("store/slices/TodosSlice");
var TodoItem_1 = require("./TodoItem");
var TodoList = function () {
    var todos = react_redux_1.useSelector(TodosSlice_1.selectTodos);
    return (<>
      {todos.map(function (todo) { return (<TodoItem_1.TodoItem key={todo.createdAt} title={todo.title} status={todo.status} lastUpdatedAt={todo.lastUpdatedAt} createdAt={todo.createdAt}/>); })}
    </>);
};
exports.TodoList = TodoList;
