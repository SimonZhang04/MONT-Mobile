import User from "../models/User.js";
import Project from "../models/Project.js";

{/* Is project the string or the object??? 
  users.projects should the array of project ids

*/}

// READ
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserProjects = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const projects = await Promise.all(
            user.projects.map((id) => Project.findById(id)) // project or user?
        );

        const formattedProjects= projects.map(
            ({ _id, title, tickets, accountManager, filePaths, budget, jobCode, projectStatus }) => {
                return { _id, title, tickets, accountManager, filePaths, budget, jobCode, projectStatus };
            }
        );

        res.status(200).json(formattedProjects);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// UPDATE
export const addProject = async (req, res) => {
    try{
        const { id, projectId } = req.params;
        const user = await User.findById(id);
        const project = await Project.findById(projectId);

        user.projects.push(projectId); // create the project, and then add it to array
        await user.save();

        const projects = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedProjects= projects.map(
            ({ _id, title, tickets, accountManager, filePaths, budget, jobCode, projectStatus }) => {
                return { _id, title, tickets, accountManager, filePaths, budget, jobCode, projectStatus };
            }
        );

        res.status(200).json(formattedProjects);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};