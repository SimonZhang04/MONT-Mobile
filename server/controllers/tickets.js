import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

// CREATE

export const createTicket = async (req, res) => {
    try {
        const { userId, description, filePaths } = req.body;
        const user = await User.findById(userId);
        const newTicket = new Ticket({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            description,
            title, 
            filePaths,
            project,
            tasks: [],
            comments: [],
            tags, 
            jobcode: {},
        });
        await newTicket.save();

        const ticket = await Ticket.find();
        res.status(202).json(ticket);

    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

// READ
export const getFeedTickets = async (req, res) => {
    try {
        const ticket = await Ticket.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
};

// UPDATE
export const addComment = async (req, res) => { // may need a comment schema in order to attach files
    try {
        const { id } = req.params;
        const { comment } = req.body; // need to get the comment
        const { userId } = req.body;
        const ticket = await Ticket.findById(id);

        // add comment
        ticket.comments.push(comment)

        const updatedTicket = await Ticket.findByIdAndUpdate(
            id,
            { $push: { comments: comment } },
            { new: true }
        );
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateTicketStatus = async (req, res) => {
    try {  
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}