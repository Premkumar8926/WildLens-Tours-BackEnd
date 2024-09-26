import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Users from './../Models/user.schema.js';
dotenv.config();

const authMiddleware = (userRole) => async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        const user = await Users.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        if (user.role !== userRole) {
            return res.status(403).json({ message: "Access denied" });
        }
        
        next();
        
    } catch (error) {
        console.error("JWT Verification Error:", error);
        return res.status(401).json({ message: "Invalid token" });
    }
}

export default authMiddleware;
