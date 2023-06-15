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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userRouter = (0, express_1.Router)();
// Requires email, password, name of user
// Signup the user but does not create session for user
exports.userRouter.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.password === undefined) {
        res.status(400).json({ message: "Password is required" });
        return;
    }
    if (req.body.email === undefined) {
        res.status(400).json({ message: "Email is required" });
        return;
    }
    if (req.body.name === undefined) {
        res.status(400).json({ message: "Name is required" });
        return;
    }
    // Hashing password here
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const password = bcrypt_1.default.hashSync(req.body.password, salt);
    const user = new User_1.User({
        name: req.body.name,
        email: req.body.email,
        password: password,
        age: 0,
        weight: 0,
        height: 0,
    });
    user.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Requires email and password to identify
// Log in the user and creates a session
// check if null = undefined, could be empty stringss
exports.userRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.password === undefined) {
        res.status(400).json({ message: "Password Required" });
        return;
    }
    if (req.body.email === undefined) {
        res.status(400).json({ message: "Email Required" });
        return;
    }
    const user = yield User_1.User.findOne({ email: req.body.email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const password = bcrypt_1.default.compareSync(req.body.password, user.password);
    if (!password) {
        res.status(400).json({ message: "Password Incorrect" });
        return;
    }
    req.session.user_email = user.email;
    return res.json(user);
}));
// Removes the current user from session
exports.userRouter.post('/signout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.user_email = "";
    return res.json({ "signout": "true" });
}));
// Current User logged in
exports.userRouter.get('/me', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to find a user by email
exports.userRouter.get('/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const user = yield User_1.User.findOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to delete a user by email
exports.userRouter.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const user = yield User_1.User.deleteOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to update current user's age
exports.userRouter.patch('/update/age', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.age === undefined) {
        res.status(400).json({ message: "Age is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.age = req.body.age;
    user.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update current user's weight
exports.userRouter.patch('/update/weight', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.weight === undefined) {
        res.status(400).json({ message: "Weight is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.weight = req.body.weight;
    user.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update current user's height
exports.userRouter.patch('/update/height', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.height === undefined) {
        res.status(400).json({ message: "Height is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.height = req.body.height;
    user.save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
