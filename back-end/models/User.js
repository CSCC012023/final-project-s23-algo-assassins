"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: Object,
        // required: true,
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    followers: {
        type: [String],
    },
    following: {
        type: [String],
    },
    biography: {
        type: String,
    },
});
exports.User = mongoose_1.default.model("User", UserSchema);
module.exports = { User: exports.User };
