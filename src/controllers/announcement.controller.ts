import { Request, Response } from "express";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.service";
import { detailAnnouncement } from "../services/announcement/detailAnnouncement.service";
import { listAnnouncementService } from "../services/announcement/listAnnouncement.service";



export const createAnnouncementController = async (req: Request, res: Response) => {
  const data = req.body

  const created_announcement = await createAnnouncementService(data)

  return res.status(201).json(created_announcement)
}

export const listAnnouncementController = async (req: Request, res: Response) => {

  const listAds = await listAnnouncementService()

  return res.status(200).json(listAds)
}

export const detailAnnouncementController = async (req: Request, res: Response) => {
  const { id_announcement } = req.params

  const announcement = await detailAnnouncement(id_announcement)

  return res.status(200).json(announcement)
}