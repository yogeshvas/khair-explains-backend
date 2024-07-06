import { Course } from "../model/course-model.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    console.log("error in getCourses", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getACourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id).populate("chapters");
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.log("error in getACourses", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const addCourse = async (req, res) => {
  try {
    const { title, desc, cover, sourceCode, techUsed, paid } = req.body;

    // Create a new course instance with data from req.body
    const course = new Course({
      title,
      desc,
      cover,
      sourceCode,
      techUsed,
      paid,
    });

    // Save the course to the database
    await course.save();

    // Return the newly created course as JSON response
    return res.status(201).json(course);
  } catch (error) {
    console.error("Error in addCourse:", error.message);
    return res.status(500).json({ message: "Failed to add course" });
  }
};
