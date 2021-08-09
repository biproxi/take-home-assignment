const Pool = require("pg").Pool;
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "postgres",
  database: "perntodo",
});

console.log("the pool is ====", pool);

export { pool };
