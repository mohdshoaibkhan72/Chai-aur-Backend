import mongoose from "mongoose";

const userschema = new mongoose.schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    emial: {
      type: String,
      required: true,
      unique: true,
    },
    passward: {
      type: String,
      required: [true, "password must be required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userschema);
