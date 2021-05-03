import express from "express";
import session from "express-session";
import crypto from "crypto";
import todoRouter from "./routes/todos"
import { Request, Response } from "express";


const app = express();
app.use(
    session({
      secret: crypto.randomBytes(48).toString('hex'),
      saveUninitialized: true,
      resave: true
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRouter)

const port = 8080;
app.listen(port, () => {
    console.log(`HTTP server listening on port ${port}`)
})