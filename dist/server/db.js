"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var Pool = require("pg").Pool;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = new Pool({
    user: "" + process.env.DB_USER,
    password: "" + process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo",
});
exports.pool = pool;
