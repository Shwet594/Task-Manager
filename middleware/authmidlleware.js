import jwt from "jsonwebtoken"
import { userModel } from "../Models/user.js";
import { cleanupTasks } from "../Controllers/taskController.js";
export const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.redirect("/login");

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        const user = await userModel.findOne({ email: decoded.email }).populate("tasks");

        if (!user) return res.redirect("/login");
        cleanupTasks();

        req.user = user; // store in request object
        next();
    } catch (err) {
        console.error(err);
        res.redirect("/login");
    }
};