
interface IImage {
  img_url: string
}

export interface IAnnouncement {
  ad_type: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: string;
  published: boolean;
  images: IImage[]
}