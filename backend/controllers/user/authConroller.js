import genTokenAndSetCookie from "../../helpers/genTokenAndSetCookie.js";
import User from "../../models/user/userModel.js";
import { userLoginSchema, userSignupSchema } from "../../zodValidations/userValidations.js";
import bcrypt from "bcryptjs"
import { adminLoginHandler, adminSignupHandler } from "../admin/adminAuthFunc.js";
import { Admin } from "../../models/admin/adminModel.js";

export async function signupUser(req, res) {
    const { email, mobileNumber, fullName, password } = req.body;
    const { role, adminRegistrationKey } = req.body;
    const saltRounds = 10;
    try {
        const zodValidationResult = userSignupSchema.safeParse({
            email,
            mobileNumber,
            fullName,
            password
        })

        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        if (role === 'admin') return adminSignupHandler(email, mobileNumber, fullName, password, saltRounds, adminRegistrationKey, res);

        const existingUser = await User.findOne({
            $or: [
                { email },
                { mobileNumber }
            ]
        })
        if (existingUser) return res.status(400).json({ error: "user already exits" });

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = new User({
            email,
            mobileNumber,
            fullName,
            password: hashedPassword
        })
        const savedUser = await user.save();
        const token = genTokenAndSetCookie(savedUser._id, false, res);
        res.status(200).json({
            message: "user created successfully",
            user: {
                _id: savedUser._id,
                email: savedUser.email,
                fullName: savedUser.fullName,
                token
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in signupUser", error.message);
    }
}

export async function loginUser(req, res) {
    const { email, password } = req.body;
    const { role, adminRegistrationKey } = req.body
    try {
        const zodValidationResult = userLoginSchema.safeParse({
            email,
            password
        })
        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        // checking for Admin credentails
        if (role === "admin") return adminLoginHandler(email,password,adminRegistrationKey,res);
        // checking for user credentails
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "email not found" });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ error: "incorrect password" });

        const token = genTokenAndSetCookie(user._id, false, res);

        res.status(200).json({
            message: "loggedin successfully",
            user: {
                _id: user._id,
                email: user.email,
                mobileNumber: user.mobileNumber,
                fullName: user.fullName,
                token
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in loginUser", error.message);
    }
}


