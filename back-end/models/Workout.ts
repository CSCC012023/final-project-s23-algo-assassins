import mongoose from "mongoose";

const Exercise = require('Exercise.ts');

const WorkoutSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    userEmail: String,
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    exercises: [ Exercise ]
});

export const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
