import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm"
import { Image } from "./image.entity";

@Entity("announcement")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  ad_type: string

  @Column()
  title: string

  @Column()
  year: number

  @Column()
  km: number

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number

  @Column()
  description: string

  @Column()
  vehicle_type: string

  @Column()
  published: boolean

  @Column({ default: false })
  is_sold: boolean

  @Column({ default: false })
  is_active: boolean

  @CreateDateColumn()
  created_at: Date

  @OneToMany(type => Image, image => image.announceament, { eager: true })
  images: Image[]

}