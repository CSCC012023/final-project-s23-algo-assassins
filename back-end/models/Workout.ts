import mongoose, { Schema, Document } from "mongoose";
import { Exercise } from './Exercise';

interface IWorkout extends Document {
    userId: string,
    description: string,
    duration: number,
    createdAt: Date,
    exercises: typeof Exercise[]
}

const WorkoutSchema: Schema = new mongoose.Schema ({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String },
    duration: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    exercises: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'} ]
});

export const Workout = mongoose.model<IWorkout>("Workout", WorkoutSchema);
