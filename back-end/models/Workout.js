"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Exercise = require('Exercise.ts');
const WorkoutSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    exercises: [Exercise]
});
exports.Workout = mongoose_1.default.model("Workout", WorkoutSchema);
module.exports = { Workout: exports.Workout };
