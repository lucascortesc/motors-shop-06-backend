import AppDataSource from "./data-source";
import app from "./app";
import "dotenv/config"
  
(async () => {
    await AppDataSource.initialize().then(() => {
    console.log("Data Source initialized")
    }).catch((err) => {
    console.error("Error during Data Source initialization", err);
});
  const port = process.env.PORT || 8080

  app.listen(port, () => console.log(`Running at http://localhost:${port}`));
})();           
