import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate:{
            validator: function (value){
                 return value.startsWith("admin.");
            },
            message: 'admin email should start from "admin." '
        }
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    }
},{timestamps: true});

const Admin = mongoose.model("Admin", adminSchema);

export {Admin};