"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ExerciseSetSchema = new mongoose_1.default.Schema({
    set: {
        type: Number,
        required: true,
    },
    lbs: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
});
const ExerciseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: Object,
        required: true,
    },
    description: {
        type: String,
    },
    muscle: {
        type: String,
        required: true,
    },
    equipment: {
        type: String,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    hasWeights: {
        type: Boolean,
        required: true,
    },
    sets: {
        type: [ExerciseSetSchema],
    }
});
exports.Exercise = mongoose_1.default.model("Exercise", ExerciseSchema);
module.exports = { Exercise: exports.Exercise };
