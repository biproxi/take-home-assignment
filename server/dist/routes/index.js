"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("./todo");
function getRoutes() {
    console.log("================================");
    // All routes in our Node API are placed on this router
    const router = express_1.default.Router();
    // router.use() prefixes our route (i.e. /api/v1/todos)
    router.use("/", todo_1.getTodoRoutes());
    return router;
}
exports.getRoutes = getRoutes;
