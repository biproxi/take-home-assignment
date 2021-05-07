import express, { NextFunction, Request, Response} from "express";
import cors from "cors";
import session from "express-session";
import crypto from "crypto";
import todoRouter from "./routes/todos";

const sessionConf = {
  secret: crypto.randomBytes(48).toString('hex'),
  saveUninitialized: true,
  resave: true
}

const corsOpts = {
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type']
}

const app = express();

app.use(session(sessionConf));
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRouter);

// Fallback error handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: error.message, error: error.toString() });
});

const port = 8081;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})