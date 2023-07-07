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
exports.workoutRouter = (0, express_1.Router)();
// Get all workouts
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workouts = yield Workout_1.Workout.find();
        res.json(workouts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one workout
router.get('/:id', getWorkout, (req, res) => {
    res.json(res.workout);
});
// Create one workout
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workout = new Workout_1.Workout({
        exercises: req.body.exercises
        // Add any other properties you want to store for a workout
    });
    try {
        const newWorkout = yield workout.save();
        res.status(201).json(newWorkout);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update one workout
router.patch('/:id', getWorkout, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.exercises != null) {
        res.workout.exercises = req.body.exercises;
    }
    // If you want to update other properties, include similar code here
    try {
        const updatedWorkout = yield res.workout.save();
        res.json(updatedWorkout);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete one workout
router.delete('/:id', getWorkout, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.workout.remove();
        res.json({ message: 'Deleted This Workout' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Middleware function for get by ID
function getWorkout(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let workout;
        try {
            workout = yield Workout_1.Workout.findById(req.params.id);
            if (workout == null) {
                return res.status(404).json({ message: 'Cant find workout' });
            }
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
        res.workout = workout;
        next();
    });
}
