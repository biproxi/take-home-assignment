import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./noGraphql/server/routes/routes"

/**
 * The main server file
 */

const app: Express = express()
const PORT: string | number = process.env.PORT || 8080;
const MONGO_URI: string = "mongodb://mongo:27017/todoDB";

app.use(cors())
app.use(express.json());
app.use(todoRoutes)

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection to the database failed :'("))
connection.once("open", () => {
    app.listen(PORT, () => {
        console.log('Server listening on port ' + PORT)
    })
})
