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
exports.exerciseRouter = void 0;
const express_1 = require("express");
const Exercise_1 = require("../models/Exercise");
exports.exerciseRouter = (0, express_1.Router)();
// Used to exercise by name
exports.exerciseRouter.get('/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    const exercise = yield Exercise_1.Exercise.findOne({ name: name });
    if (exercise === null) {
        res.status(400).json({ message: "Exercise not found" });
        return;
    }
    return res.json(exercise);
}));
// Used to get all exercises grouped by their muscle
exports.exerciseRouter.get('/groupedExercises', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const group = 'muscle';
    const exercises = (yield Exercise_1.Exercise.find()).filter((exercise) => {
        return exercise.muscle != undefined;
    });
    const groupedExercisesObject = {};
    exercises.forEach((exercise) => {
        if (groupedExercisesObject[exercise[group]] != undefined) {
            groupedExercisesObject[exercise[group]].push(exercise);
        }
        else {
            groupedExercisesObject[exercise[group]] = [exercise];
        }
    });
    const groupedExercisesArray = [];
    Object.keys(groupedExercisesObject).forEach((key) => {
        groupedExercisesArray.push({
            muscle: key, exercises: groupedExercisesObject[key]
        });
    });
    return res.json(groupedExercisesArray);
}));
