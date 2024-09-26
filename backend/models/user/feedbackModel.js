import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    subject:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
})

const Feedback = mongoose.model('Feedback',feedbackSchema);

export default feedbackSchema;