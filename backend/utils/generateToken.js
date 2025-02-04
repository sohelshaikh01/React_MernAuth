import jwt from "jsonwebtoken";

// userId to pull userProfile 
// Make token for other actions

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId}, process.env.JWT_SECRET, {
        expiresIn: '30d', // When token to expires
    });

    // Saving the token into cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        // With secure it become https
        secure: process.env.NODE_ENV !== 'development',
        sameSite: "strict", // prevent from csrf attack
        maxAge: 30 * 24 * 60 * 60 * 1000 // for 30days
    });
};

export default generateToken;