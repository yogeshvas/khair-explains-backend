import express from "express";
import { createChapter } from "../controller/chapter.js";

const router = express.Router();
console.log("at routes");
router.route("/:courseId").get(createChapter);

export default router;
