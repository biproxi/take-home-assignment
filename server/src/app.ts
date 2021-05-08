import express, { Request, Response, NextFunction } from 'express'
import { todoRouter } from './routes/todo'
import { json } from 'body-parser'
import cors from "cors"

const app = express()

app.use(json())
app.use(cors())
app.use('/todos', todoRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(4000)

  


