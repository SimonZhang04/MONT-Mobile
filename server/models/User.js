import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,
        max: 10
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    projects: {
        type: Array,
        default: [],
    },
    picturePath: {
      type: String,
      default: "",
    },
    occupation: String,
    company: String,

  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;