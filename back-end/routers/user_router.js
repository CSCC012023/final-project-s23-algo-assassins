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
const nodemailer_1 = __importDefault(require("nodemailer"));
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/send/verification', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate token here and send an email
    const { email, key } = req.body;
    // Find user by email
    const user = yield User_1.User.findOne({ email: email });
    if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    // Create mail with options
    const mailer = nodemailer_1.default.createTransport({
        service: 'Gmail',
        auth: {
            user: 'algoassassins@gmail.com',
            pass: 'yrnsoldxecwdubxx'
        }
    });
    const mailOptions = {
        from: 'algoassassins@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: 'Enter the following code to verify your email: ' + key
    };
    // Send the mail
    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send verification email' });
            return;
        }
        else {
            res.status(200).json({ message: 'Verification email sent successfully' });
            return;
        }
    });
}));
exports.userRouter.post('/password/reset', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, confirmPassword } = req.body;
    // Password validation
    if (password.length < 6 || password != confirmPassword) {
        res.status(400).json({ message: "Invalid password content" });
        return;
    }
    // Finding user by email
    const user = yield User_1.User.findOne({ email: email });
    if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    // Encrypting new password
    const saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    const pass = bcrypt_1.default.hashSync(password, salt);
    user.password = pass;
    user.save()
        .then((data) => {
        res.status(200).json({ message: "Password updated" });
        return;
    })
        .catch((error) => {
        res.status(500).json({ message: "Update failed" });
        return;
    });
    return;
}));
const upload = (0, multer_1.default)({ dest: "uploads/" });
// Requires email, password, name of user
// Signup the user and create session for user
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        img: { path: null, contentType: null },
        age: 0,
        weight: 0,
        height: 0,
        followers: [],
        following: [],
    });
    req.session.user_email = user.email;
    user
        .save()
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
exports.userRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.userRouter.post("/signout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.user_email = "";
    return res.json({ signout: "true" });
}));
// Current User logged in
exports.userRouter.get("/me", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to find a user by email
exports.userRouter.get("/find", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const user = yield User_1.User.findOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to delete a user by email
exports.userRouter.delete("/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    const user = yield User_1.User.deleteOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
}));
// Used to update current user's age
exports.userRouter.patch("/update/age", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update current user's weight
exports.userRouter.patch("/update/weight", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update current user's height
exports.userRouter.patch("/update/height", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update user's name by email
exports.userRouter.post("/update/name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const find = req.session.user_email;
    if (find === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    if (req.body.name === undefined) {
        res.status(400).json({ message: "name is required" });
        return;
    }
    const user = yield User_1.User.findOne({ email: find });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.name = req.body.name;
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update user's username by email
exports.userRouter.post("/update/username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const find = req.session.user_email;
    if (find === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    if (req.body.username === undefined) {
        res.status(400).json({ message: "name is required" });
        return;
    }
    const user = yield User_1.User.findOne({ email: find });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.username = req.body.username;
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update user's biography by email
exports.userRouter.post("/update/biography", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const find = req.session.user_email;
    if (find === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    if (req.body.biography === undefined) {
        res.status(400).json({ message: "name is required" });
        return;
    }
    const user = yield User_1.User.findOne({ email: find });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.biography = req.body.biography;
    user
        .save()
        .then((data) => {
        return res.json(data);
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to update user's profile picture by email
exports.userRouter.post("/update/picture", upload.single("img"), (req, res) => {
    const find = req.session.user_email;
    if (find === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    if (req.file === undefined) {
        res.status(400).json({ message: "Image is required" });
        return;
    }
    const user = User_1.User.findOne({ email: find });
    user.then((data) => {
        data.img = req.file;
        data
            .save()
            .then((data) => {
            return res.json(data);
        })
            .catch((err) => {
            return res.status(500).json({ message: err });
        });
    });
});
// get user profile picture by email
exports.userRouter.get("/img", (req, res) => {
    const email = req.query.email;
    if (email === undefined) {
        res.status(400).json({ message: "Email is required" });
        return;
    }
    User_1.User.findOne({ email: email })
        .then((u) => {
        res.setHeader("Content-Type", u.img.mimetype);
        res.sendFile(u.img.path, { root: path_1.default.resolve() });
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
});
// Used to create a user follow connection
// Followed email is the user that is being followed
// Follower email is the user that is following
exports.userRouter.patch("/create/follow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const followed = req.body.followed_email;
    const follower = req.body.follower_email;
    if (followed === undefined || follower === undefined) {
        res
            .status(400)
            .json({ message: "Following email and Follower email are required" });
        return;
    }
    const user1 = yield User_1.User.findOne({ email: followed });
    const user2 = yield User_1.User.findOne({ email: follower });
    if (user1 === null || user2 === null) {
        res.status(400).json({ message: "A user is not found" });
        return;
    }
    user1.followers.push(user2.email);
    user2.following.push(user1.email);
    user1
        .save()
        .then((data) => {
        user2
            .save()
            .then((data) => {
            return res.json(data);
        })
            .catch((err) => {
            return res.status(500).json({ message: err });
        });
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
// Used to remove a user follow connection
// Followed email is the user that is being followed currently
// Follower email is the user that is following currently
exports.userRouter.patch("/remove/follow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const followed = req.body.followed_email;
    const follower = req.body.follower_email;
    if (followed === undefined || follower === undefined) {
        res
            .status(400)
            .json({ message: "Following email and Follower email are required" });
        return;
    }
    const user1 = yield User_1.User.findOne({ email: followed });
    const user2 = yield User_1.User.findOne({ email: follower });
    if (user1 === null || user2 === null) {
        res.status(400).json({ message: "A user is not found" });
        return;
    }
    user1.followers = user1.followers.filter((email) => email !== user2.email);
    user2.following = user2.following.filter((email) => email !== user1.email);
    user1
        .save()
        .then((data) => {
        user2
            .save()
            .then((data) => {
            return res.json(data);
        })
            .catch((err) => {
            return res.status(500).json({ message: err });
        });
    })
        .catch((err) => {
        return res.status(500).json({ message: err });
    });
}));
