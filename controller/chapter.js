import { Chapter } from "../model/chapter-model.js";
import { Course } from "../model/course-model.js";

export const createChapter = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, url } = req.body;

    // Find the course by ID
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Cannot find course" });
    }

    // Create and save the new chapter
    const chapter = new Chapter({
      title,
      videoUrl: url,
      course: courseId,
    });
    const newChapter = await chapter.save();

    // Add the new chapter to the course's chapters array
    course.chapters.push(newChapter);
    await course.save();

    // Return the newly created chapter
    return res.status(201).json(newChapter);
  } catch (error) {
    console.log("error in createChapter", error.message);
    return res.status(500).json({ message: error.message });
  }
};
