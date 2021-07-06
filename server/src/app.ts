import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors';
import { authMiddleware } from './middleware/auth-middleware'
import todo from "./routes/todo";
import graphql from "./routes/graphql";

const app = express()
const port = 4000

app.use(cors())
app.use(authMiddleware)
app.use(bodyParser.json())

app.use(todo)
app.use(graphql);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
