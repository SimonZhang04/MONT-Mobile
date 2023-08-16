import Project from "../models/Project.js";
import User from "../models/User.js";

// Create project, update status

// CREATE

export const createProject = async (req, res) => {
    try {
        const { clientId, title, accountManagerId, jobCode } = req.body;
        const client = await User.findById(clientId);
        const accountManager = await User.findById(accountManagerId);
        const newProject = new Project({
            clientId,
            title,
            tickets: [],
            accountManagerId,
            filesPaths: [],
            budget: [],
            jobCode,
            projectStatus: "active",
        });
        await newProject.save();

        const project = await Project.find();
        res.status(201).json(project);
    }  catch (err) {
        res.status(409). json({ message: err.message });
    }
}

// READ

// number of updates?

// UPDATE

export const updateProjectStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);

        if (project.status === "active") {
            project.status.set("complete");
        } else {
            project.status.set("active");
        }

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            { status: project.status },
            { new: true }
        );

        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

