import express, { NextFunction, Request, Response} from "express";
import cors from "cors";
import session from "express-session";
import crypto from "crypto";
import todoRouter from "./routes/todos";

const app = express();
app.use(
    session({
      secret: crypto.randomBytes(48).toString('hex'),
      saveUninitialized: true,
      resave: true
    })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', todoRouter);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: error.message, error: error.toString() });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})