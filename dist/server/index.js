"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 5000;
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/api", routes_1.getRoutes());
app.listen(PORT, function () { return console.log("Running on " + PORT + " \u26A1"); });
