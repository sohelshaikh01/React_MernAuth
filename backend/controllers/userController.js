import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';


// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email});

    // Password match
    if(user && (await user.matchPasswords(password))) {

        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    }
    else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    
    res.status(200).json({message: "Auth User"});
});


// @desc    Register a new user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {

    // Destructuring the values from request object
    const { name, email, password } = req.body;

    // check whether if user already present
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // If no user Then create user
    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } // !token in res like others
    
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
    res.status(200).json({message: "Register User"});
    
});


// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: "User Logged Out"});
});


// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.body._id).select("-password");
    // const user = {
    //     _id: req.user._id,
    //     name: req.user.name,
    //     email: req.user.email,
    // }
    res.status(200).json(user);
});


// @desc    Get user profile
// route    PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    // This is not working
    const user = await User.findById(req.user._id);

    if(user) {
        user.name = name || user.name;
        user.email = email || user.email;

        if(password) {
            user.password = password;
        }

        const updatedUser = user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        });

    } else {
        res.status(404);
        throw new Error("User not found");
    }
    
    res.status(200).json(user, {message: "Update User Profile"});
});


export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile 
};