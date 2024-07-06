import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    sourceCode: {
      type: String,
    },
    techUsed: [
      {
        type: String,
        required: true,
      },
    ],
    paid: {
      type: Boolean,
      default: false,
    },

    chapters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter",
      },
    ],
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
