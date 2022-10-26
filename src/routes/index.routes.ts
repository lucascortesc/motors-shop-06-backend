import { Express } from "express"
import { announcementRoutes } from "./announcement.routes"


export const AppRoutes = (app: Express) => {
  app.use("/announcement", announcementRoutes())
}