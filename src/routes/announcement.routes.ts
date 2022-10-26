import { Router } from "express";
import { createAnnouncementController, detailAnnouncementController, listAnnouncementController } from "../controllers/announcement.controller";


const routes = Router()

export const announcementRoutes = () => {
  routes.post("", createAnnouncementController)
  routes.get("", listAnnouncementController)
  routes.get("/detail/:id_announcement", detailAnnouncementController)

  return routes
}