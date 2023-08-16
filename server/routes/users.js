import express from "express";
import {
    getUser,
    getUserProjects,
    addProject,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getUser);
router.get("/:id/projects", verifyToken, getUserProjects);

// UPDATE
router.patch("/:id/:projectId", verifyToken, addProject);

export default router;