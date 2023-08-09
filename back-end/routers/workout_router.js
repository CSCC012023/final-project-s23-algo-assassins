"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutRouter = void 0;
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const User_1 = require("../models/User");
exports.workoutRouter = (0, express_1.Router)();
// Post your workout
exports.workoutRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    const workout = new Workout_1.Workout({
        userId: user._id,
        description: req.body.description,
        duration: req.body.duration,
        createdAt: req.body.date,
        exercises: req.body.exercises,
        totalVolume: req.body.totalVolume,
        email: req.session.user_email,
    });
    workout.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Get array of workouts
exports.workoutRouter.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    Workout_1.Workout.find({ userId: user._id })
        .sort({ date: -1 })
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}));
// Fetch workouts of a list of following, and the user himself
exports.workoutRouter.get('/followingWorkouts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const following = req.query.following; // Following list from query params
    if (!following) {
        return res.status(400).json({ error: "No following list provided" });
    }
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    try {
        // Parse the emails from the string into an array
        let emails = following.split(",");
        console.log(emails);
        // Fetch all users who are followed by the current user
        const followedUsers = yield User_1.User.find({ email: { $in: emails } });
        // Extract their ids
        let userIds = followedUsers.map(user => user._id);
        // Fetch workouts of these users
        const workouts = yield Workout_1.Workout.find({
            userId: { $in: userIds }
        }).sort({ 'createdAt': -1 }); // Sorting by descending creation time
        return res.status(200).json(workouts);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}));
// Get array of workout progress
exports.workoutRouter.get('/getProgress', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    Workout_1.Workout.find({ userId: user._id })
        .sort({ date: -1 })
        .then((data) => {
        const workoutprogress = [];
        data.forEach((d) => {
            const exercises = JSON.parse(JSON.parse(JSON.stringify(d["exercises"])));
            console.log(JSON.stringify(exercises, null, 4));
            workoutprogress.push({
                createdAt: d["createdAt"],
                duration: d["duration"],
                totalReps: Object.keys(exercises).reduce((a, c) => a +
                    exercises[c]["sets"]
                        .filter((s) => s.isComplete != undefined && s.isComplete)
                        .reduce((b, d) => b + d["reps"], 0), 0),
                totalVolume: d['totalVolume']
            });
        });
        res.json(workoutprogress);
    })
        .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}));
