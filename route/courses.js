import express from "express";
import { addCourse, getACourse, getCourses } from "../controller/course.js";

const router = express.Router();

router.route("/").get(getCourses);
router.route("/:id").get(getACourse);
router.route("/").post(addCourse);

export default router;
