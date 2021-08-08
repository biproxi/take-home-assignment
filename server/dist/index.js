"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/api", routes_1.getRoutes());
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
