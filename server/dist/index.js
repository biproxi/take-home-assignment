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
const PORT = process.env.PORT || 8080;
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
// const client = new Client({
//   password: "postgres",
//   user: "postgres",
//   host: "postgres",
// });
// app.use("/ping", async (req, res) => {
//   const db = await client
//     .query("select 1+1")
//     .then(() => "up")
//     .catch(() => "down");
//   res.send({
//     db,
//   });
// });
app.use("/api", routes_1.getRoutes());
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
