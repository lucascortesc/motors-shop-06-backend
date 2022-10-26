import AppDataSource from "../../../data-source";
import { IAnnouncement } from "../../interfaces/announcement";
import { Announcement } from "../../entities/announcement.entity";
import { Image } from "../../entities/image.entity";

export const createAnnouncementService = async (data: IAnnouncement) => {
  const announcementrepository = AppDataSource.getRepository(Announcement)
  const imageRepository = AppDataSource.getRepository(Image)

  const announcement = announcementrepository.create({
    ad_type: data.ad_type,
    title: data.title,
    year: data.year,
    km: data.km,
    price: data.price,
    description: data.description,
    vehicle_type: data.vehicle_type,
    published: data.published,
  })

  const newAnnouncement = await announcementrepository.save(announcement)

  await Promise.all(
    data.images.map(async (item) => {
      const image = imageRepository.create({
        img_url: item.img_url,
        announceament: newAnnouncement
      })
      await imageRepository.save(image)
    })
  )

  const response = await announcementrepository.findOneBy({ id: newAnnouncement.id })

  return response
}


