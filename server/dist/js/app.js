"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
// app.use(cors())
// app.use(todoRoutes)
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.sgowt.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set("useFindAndModify", false)
// mongoose
//   .connect(uri, options)
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch(error => {
//     throw error
// })
// const MONGO_URI: string = "mongodb://localhost:27017/todoDB";
const MONGO_URI = "mongodb+srv://emma-fewer-20:M0ngoDB@@@123@cluster0.sgowt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(cors_1.default());
app.use(express_1.default.json());
// app.listen(3000)
app.use(index_1.default);
mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose_1.default.connection;
connection.on("error", console.error.bind(console, "connection to the database failed :'("));
connection.once("open", () => {
    app.listen(PORT, () => {
        console.log('Server listening on port ' + PORT);
    });
});
