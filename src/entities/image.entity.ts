import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { Announcement } from "./announcement.entity"


@Entity("image")
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  img_url: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(type => Announcement, announceament => announceament.images, { onDelete: "CASCADE" })
  announceament: Announcement
}