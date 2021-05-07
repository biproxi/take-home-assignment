// import express, { Express } from "express"
// import mongoose from "mongoose"
// import cors from "cors"
// import todoRoutes from "./routes/index"

// const app: Express = express()

// const PORT: string | number = process.env.PORT || 4000

// import express from 'express'
// import express, { NextFunction, Request, Response} from "express";
// import { json } from 'body-parser'
// import { todoRouter } from './routes/todo'
// import mongoose from 'mongoose'
// import cors from "cors"

// const app = express()
// app.use(json())
// app.use(cors())
// app.use(todoRouter)

// Fallback error handling
// app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
//     return res.status(500).json({ message: error.message, error: error.toString() });
//   });
  
//   const port = 4000;
//   app.listen(port, () => {
//       console.log(`Server listening on port ${port}`)
//   })

// const uri = 'mongodb://localhost:27017/todo'
// const options = {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// Below is second option (not working)

// mongoose
//   .connect(uri, options)
//   .then(() =>
//     app.listen(4000, () =>
//       console.log('Server running on http://localhost:4000')
//     )
//   )
//   .catch(error => {
//     throw error
// })

// mongoose
//     .connect('mongodb://localhost:27017/todo', {
//         useCreateIndex: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, () => {
//         console.log('connected to database')
//     })

// app.listen(4000, () => {
//     console.log('server is listening on port 4000')
// })

// mongoose.connection.on('connected', function () {  
//     console.log('Mongoose default connection open to 4000');
//   }); 
  
  // If the connection throws an error
//   mongoose.connection.on('error',function (err) {  
//     console.log('Mongoose default connection error: ' + err);
//   }); 
  
  // When the connection is disconnected
//   mongoose.connection.on('disconnected', function () {  
//     console.log('Mongoose default connection disconnected'); 
//   });

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

  


