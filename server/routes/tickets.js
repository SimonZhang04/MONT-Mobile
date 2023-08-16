import express from "express";
import { getFeedTickets, addComment, updateTicketStatus } from "../controllers/tickets.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:userId/tickets", verifyToken, getFeedTickets);

// UPDATE
router.patch("/:id/comment", verifyToken, addComment);
router.patch("/:id/updateTicket", verifyToken, updateTicketStatus);

export default router;