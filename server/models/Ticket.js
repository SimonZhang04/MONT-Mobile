import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String, 
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
        min: 10,
        max: 500
    },
    comments: {
      type: Array,
      default: [],
    },
    project: {
        type: String, // may have to be a Project type
        required: true,
    },
    tags: {
        type: Array,
        default: [],
    },
    tasks: {
        type: Array,
        default: [],
    },
    filePaths: {
      type: Array,
      default: [],
    },
    jobCode: String,
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;