import AppDataSource from "../../../data-source"
import { Announcement } from "../../entities/announcement.entity"

export const listAnnouncementService = async () => {

  const announceamentRepository = AppDataSource.getRepository(Announcement)

  const listingAds = announceamentRepository.find()

  return listingAds
}