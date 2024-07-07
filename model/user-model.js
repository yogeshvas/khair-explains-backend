import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://avatars.githubusercontent.com/u/80148019?v=4",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
