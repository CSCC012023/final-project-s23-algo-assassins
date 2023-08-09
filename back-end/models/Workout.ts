import mongoose, { Schema, Document } from "mongoose";

const WorkoutSchema: Schema = new mongoose.Schema ({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String },
    duration: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    exercises: [ {type: String} ],
    totalVolume: { type: Number },
    email: { type: String }
});

export const Workout = mongoose.model("Workout", WorkoutSchema);
