import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: Object,
        required: true,
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
});

export const User = mongoose.model("User", UserSchema);

module.exports = { User };