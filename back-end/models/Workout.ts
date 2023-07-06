import mongoose from "mongoose";

const Exercise = require('Exercise.ts');

const WorkoutSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    exercises: [Exercise]
})

export const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = { Workout };
