"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const TodoController = __importStar(require("../controller/todo"));
function getTodoRoutes() {
    const router = express_1.default.Router();
    router.post("/todos", TodoController.AddTodo);
    router.get("/todos", TodoController.GetAllTodos);
    router.get("/todos/:id", TodoController.GetTodo);
    router.put("/todos/:id", TodoController.UpdateTodo);
    router.delete("/todos/:id", TodoController.DeleteTodo);
    // ROUTES //
    return router;
}
exports.getTodoRoutes = getTodoRoutes;
