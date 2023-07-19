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
exports.routineRouter = void 0;
const express_1 = require("express");
const Routine_1 = require("../models/Routine");
const User_1 = require("../models/User");
exports.routineRouter = (0, express_1.Router)();
// Post your routine
exports.routineRouter.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    const routine = new Routine_1.Routine({
        userId: user._id,
        name: req.body.name,
        description: req.body.description,
        exercises: req.body.exercises,
    });
    routine.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Get array of routines
exports.routineRouter.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }
    Routine_1.Routine.find({ userId: user._id })
        .sort({ date: -1 })
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).json({ message: err.message });
    });
}));
