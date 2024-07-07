import express from "express";
import dotenv from "dotenv";
import connectMongo from "./db/connect-mongo.js";
import coursesRoute from "./route/courses.js";
import chapterRoute from "./route/chapters.js";
import authRoute from "./route/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "https://khairexplains.netlify.app", // Allow requests from this origin
  credentials: true, // Allow cookies to be sent with requests
};

app.use(cors(corsOptions));
// Adjust CORS configuration to allow your frontend origin
app.use(cookieParser());

app.use("/api/v1/courses", coursesRoute);
app.use("/api/v1/chapters", chapterRoute);
app.use("/api/v1/auth", authRoute);

app.listen(8080, () => {
  console.log("Server is running at port 8080");
  connectMongo();
});
