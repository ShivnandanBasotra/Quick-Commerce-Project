import jwt from 'jsonwebtoken';
import User from '../models/user/userModel.js';

export default async function adminProtectRoute (req, res, next) {
    const token = req.cookies.jwt;
    try {
        if (!token) return res.status(400).json({error: "unauthorized access"});
        const decoded =  jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded.role === 'admin') return res.status(400).json({error: "Unauthorized access. You are not admin"});
        const user = await User.findById(decoded.userId); 
        if(!user) return res.status(400).json({error: "unauthorized access"});
        req.user = user;
        next();   
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in protecedRoute middleware", error.message);
    }
}