import express from "express";
import cors, { CorsOptions } from "cors";
import session from "express-session";
import crypto from "crypto";
import todoRouter from "./routes/todos";
import { logError, logRequest } from "./middleware/logRequest";
import { catchErrors } from "./middleware/errorHandling";
import { SessionOptions } from "express-session";

const sessionConf: SessionOptions = {
  secret: crypto.randomBytes(48).toString('hex'),
  saveUninitialized: true,
  resave: true
}

const corsOpts: CorsOptions = {
  origin: true,
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept']
}

const app = express();

app.use(session(sessionConf));
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', logRequest, todoRouter, logError, catchErrors);

const port = 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
