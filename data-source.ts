import { DataSource } from "typeorm";
import "dotenv/config";


const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5431,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization", err)
  })
export default AppDataSource