import "reflect-metadata"
import express from "express"
import "express-async-errors"
import { errorMiddleware } from "./src/middlewares/error.middleware"
import { AppRoutes } from "./src/routes/index.routes"

const app = express()

app.use(express.json())

AppRoutes(app)

app.use(errorMiddleware)

export default app