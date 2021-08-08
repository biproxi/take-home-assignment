"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = exports.UpdateTodo = exports.GetTodo = exports.GetAllTodos = exports.AddTodo = void 0;
const db_1 = require("../db");
function AddTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, status, createdAt, lastUpdatedAt } = req.body;
            const newTodo = yield db_1.pool.query('INSERT INTO todo (title, status, "createdAt", "lastUpdatedAt") VALUES($1, $2, $3, $4) RETURNING *', [title, status, createdAt, lastUpdatedAt]);
            res.json(newTodo.rows[0]);
        }
        catch (error) {
            console.error(error.message);
            res.json({ errors: [error] });
        }
    });
}
exports.AddTodo = AddTodo;
function GetAllTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allTodos = yield db_1.pool.query("SELECT * FROM todo");
            res.json(allTodos.rows);
        }
        catch (err) {
            res.status(418).send(`There was a problem getting all todo status ${err}`);
        }
    });
}
exports.GetAllTodos = GetAllTodos;
function GetTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const todo = yield db_1.pool.query('SELECT * FROM todo WHERE "createdAt" = $1', [
                id,
            ]);
            res.json(todo.rows[0]);
        }
        catch (err) {
            res.status(418).send(`There was a problem getting this todo ${err}`);
        }
    });
}
exports.GetTodo = GetTodo;
function UpdateTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { title, lastUpdatedAt, status } = req.body;
            yield db_1.pool.query('UPDATE todo SET title = $1, "lastUpdatedAt" = $2, status = $3 WHERE "createdAt" = $4', [title, lastUpdatedAt, status, id]);
            const todo = yield db_1.pool.query('SELECT * FROM todo WHERE "createdAt" = $1', [
                id,
            ]);
            res.json(todo.rows[0]);
        }
        catch (err) {
            res
                .status(418)
                .send(`There was a problem updating this todo description ${err}`);
        }
    });
}
exports.UpdateTodo = UpdateTodo;
function DeleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            yield db_1.pool.query('DELETE FROM todo WHERE "createdAt" = $1', [id]);
            res.json({ createdAt: id });
        }
        catch (err) {
            res.status(418).send(`There was a problem deleting ${err}`);
        }
    });
}
exports.DeleteTodo = DeleteTodo;
