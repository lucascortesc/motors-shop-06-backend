import AppDataSource from "../../../data-source"
import { Announcement } from "../../entities/announcement.entity"
import { AppError } from "../../errors/appError"

export const detailAnnouncement = async (id_announcement: string) => {

  const announceamentRepository = AppDataSource.getRepository(Announcement)

  const findAnouncement = await announceamentRepository.findOneBy({ id: id_announcement })

  if (!findAnouncement) throw new AppError(404, "Not Found.")

  return findAnouncement
}