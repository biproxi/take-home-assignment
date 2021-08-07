"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var TodosSlice_1 = __importDefault(require("./slices/TodosSlice"));
var TodoInput_1 = __importDefault(require("./slices/TodoInput"));
var TodosInputEdit_1 = __importDefault(require("./slices/TodosInputEdit"));
var store = toolkit_1.configureStore({
    reducer: {
        todos: TodosSlice_1.default,
        todosInput: TodoInput_1.default,
        todosInputEdit: TodosInputEdit_1.default,
    },
});
exports.default = store;
