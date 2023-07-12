"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routine = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RoutineSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    description: { type: String },
    exercises: [{ type: String }],
});
exports.Routine = mongoose_1.default.model("Routine", RoutineSchema);
