import express from "express"
import mongoose from "mongoose"
import blogRouter from "./routes/blog-routes"
import router from "./routes/user-routes"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", blogRouter)
mongoose
  .connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.q07ijz1.mongodb.net/?retryWrites=true&w=majority`)

  .then(() => app.listen(3020, () => console.log("connected to database and server is running")))
  .catch(err => console.log(err))
