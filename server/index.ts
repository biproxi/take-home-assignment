import express, { Express } from "express";
import { getRoutes } from "./routes";
import cors from "cors";
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const app: Express = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

app.use("/ping", async (req, res) => {
  const db = await client
    .query("select 1+1")
    .then(() => "up")
    .catch(() => "down");

  res.send({
    db,
  });
});
app.use("/api", getRoutes());

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
