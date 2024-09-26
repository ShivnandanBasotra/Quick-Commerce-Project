import z from 'zod'
import { Admin } from '../../models/admin/adminModel.js';
import bcrypt from "bcryptjs"
import genTokenAndSetCookie from '../../helpers/genTokenAndSetCookie.js';


const adminEmailSchema = z.string().email('invalid email').refine((email) => {
    return email.startsWith("admin.");
}, {
    message: "Email must start with 'admin.'",
})

export async function adminSignupHandler(adminEmail,mobileNumber,fullName,password,saltRounds, adminRegistrationKey,res) {
    try {
        if (adminRegistrationKey !== process.env.ADMIN_REGISTRATION_KEY) return res.status(400).json({ error: "Wrong admin registration key." })
            const zodValidationResult = adminEmailSchema.safeParse(adminEmail);
            if (!zodValidationResult.success) {
                const messages = zodValidationResult.error.issues.map(issue => {
                    return issue.message;
                });
                return res.status(400).json({ error: messages })
            }
            const existingAdmin = await Admin.findOne({
                $or: [
                    { email: adminEmail },
                    { mobileNumber }
                ]
            });
            if (existingAdmin) return res.status(400).json({ error: "admin already exits" });
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const admin = new Admin({
                email:adminEmail,
                mobileNumber,
                fullName,
                password: hashedPassword
            })
            const savedAdmin = await admin.save();
            const token = genTokenAndSetCookie(savedAdmin._id,true,res);
            return res.status(200).json({
                message: "user created successfully",
                admin: {
                    _id: savedAdmin._id,
                    email: savedAdmin.email,
                    fullName: savedAdmin.fullName,
                    token
                }
            })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in adminSignupHandler", error.message);
    }
}

export async function adminLoginHandler (adminEmail,password,adminRegistrationKey,res){
    try {
        const zodValidationResult = adminEmailSchema.safeParse(adminEmail);
            if (!zodValidationResult.success) {
                const messages = zodValidationResult.error.issues.map(issue => {
                    return issue.message;
                });
                return res.status(400).json({ error: messages })
            }
       if(adminRegistrationKey !== process.env.ADMIN_REGISTRATION_KEY) return res.status(200).json({error: "Wrong admin registaration key."})
        const admin = await Admin.findOne({ email:adminEmail });
       if (!admin) return res.status(400).json({ error: "email not found" });
       const isPasswordCorrect = await bcrypt.compare(password, admin.password);
       if (!isPasswordCorrect) return res.status(400).json({ error: "incorrect password" });
       const token = genTokenAndSetCookie(admin._id, true, res);
       return res.status(200).json({
           message: "admin logged in successfully", user: {
               _id: admin._id,
               email: admin.email,
               mobileNumber: admin.mobileNumber,
               fullName: admin.fullName,
               token
           }
       })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in adminLoginHandler", error.message);
    }
}