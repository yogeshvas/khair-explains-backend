import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectMongo from "./db/connect-mongo.js";
import coursesRoute from "./route/courses.js";
import chapterRoute from "./route/chapters.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/courses", coursesRoute);
app.use("/api/v1/chapters", chapterRoute);

app.listen(8080, (req, res) => {
  console.log("Server is running at port 8080");
  connectMongo();
});
