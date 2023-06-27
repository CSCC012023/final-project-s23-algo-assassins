"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ExerciseSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        fieldname: {
            type: String,
        },
        originalname: {
            type: String,
        },
        encoding: {
            type: String,
        },
        mimetype: {
            type: String,
        },
        destination: {
            type: String,
        },
        filename: {
            type: String,
        },
        path: {
            type: String,
        },
        size: {
            type: Number,
        },
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
});
exports.Exercise = mongoose_1.default.model("Exercise", ExerciseSchema);
module.exports = { Exercise: exports.Exercise };
