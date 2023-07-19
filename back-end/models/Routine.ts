import mongoose, { Schema, Document } from "mongoose";

const RoutineSchema: Schema = new mongoose.Schema ({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    description: { type: String },
    exercises: [ {type: String} ],
});

export const Routine = mongoose.model("Routine", RoutineSchema);
