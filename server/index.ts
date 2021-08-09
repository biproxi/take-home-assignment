import express, { Express } from "express";
import { getRoutes } from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api", getRoutes());

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
