import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    }
},{timestamps: true})

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;