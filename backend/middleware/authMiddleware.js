import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Used in userRoutes.js
const protect = asyncHandler( async(req, res, next) => {
    
    let token;
    token = req.cookies.jwt;
    console.log(req.cookies);

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');
            next();
            
        } catch(error) {
            res.status(401);
            throw new Error('Not authorized, Invalid Token', error);
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, No Token');
    }
});

export { protect }; 