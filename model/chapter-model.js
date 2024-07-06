import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

export const Chapter = mongoose.model("Chapter", chapterSchema);
