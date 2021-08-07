"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
var express_1 = __importDefault(require("express"));
var todo_1 = require("./todo");
function getRoutes() {
    // All routes in our Node API are placed on this router
    var router = express_1.default.Router();
    // router.use() prefixes our route (i.e. /api/v1/todos)
    router.use("/auth", todo_1.getTodoRoutes());
    return router;
}
exports.getRoutes = getRoutes;
