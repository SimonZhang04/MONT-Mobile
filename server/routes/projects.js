import express from "express";
import { updateProjectStatus } from "../controllers/projects.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// UPDATE
router.patch(":/:id/updateStatus", verifyToken, updateProjectStatus);

export default router;