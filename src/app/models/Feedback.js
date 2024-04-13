import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        safetyRating: {
            type: String,
            required: true,
        },
        commRating: {
            type: String,
            required: true,
        },
        thumbs: {
            type: String,
            required: true,
        },
        traits: {
            type: Array,
            required: true,
        },
        feedback: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    })

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema)

export default Feedback;