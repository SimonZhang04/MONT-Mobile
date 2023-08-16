import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    clientId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tickets: {
        type: Array,
        default: [],
    },
    accountManagerId: {
        type: String,
        required: true
    },
    filePaths: {
        type: Array,
        default: [],
    },
    budget: {
      type: Array,
      default: [] // budget[0] with total and cost breakdowns
    },
    jobCode: String,
    //timelineId: String, integrate later
    projectStatus: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;