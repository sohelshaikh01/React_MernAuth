import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Used in userRoutes.js
const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Get token from Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, Invalid Token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, No Token');
    }
});

export { protect }; 