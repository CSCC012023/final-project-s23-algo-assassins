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
exports.exampleRouter = void 0;
const express_1 = require("express");
const exampleUser_1 = require("../models/exampleUser");
exports.exampleRouter = (0, express_1.Router)();
exports.exampleRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello from example router');
}));
exports.exampleRouter.post('/adduser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const user = new exampleUser_1.User({
        name: req.body.name,
        age: req.body.age,
    });
    user.save()
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.json({ message: err });
    });
}));
exports.exampleRouter.get('/getuser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    exampleUser_1.User.findOne({ name: name })
        .then((data) => {
        res.json(data._id.toString());
    })
        .catch((err) => {
        res.json({ message: err });
    });
}));
// check login 
exports.exampleRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // user input
    console.log("Received Login Request");
    const email = req.body.email;
    const password = req.body.password;
    console.log("input email: " + email);
    console.log("input password: ", password);
    exampleUser_1.User.findOne({ email: email })
        .then((data) => {
        // console.log(data);
        // console.log("Stored password: ", data.password);
        // console.log("Stored name: ", data.name);
        // console.log("Received");
        // console.log("stoered email: " + data.email + "input email: " + email)
        // console.log("Stored email: ", data.email);
        // console.log("Stored age: ", data.age);
        // console.log("Stored weight: ", data.weight);
        // console.log("Stored height: ", data.height);
        // console.log("Stored _v: ", data.__v);
        // console.log("stored password: " + data.password + ", input password: " + password);
        if (data != null && data.password == password) {
            // return object ID
            res.json({ success: true });
        }
        else {
            // wrong password
            res.json({ success: false });
        }
    })
        // Error
        .catch((err) => {
        res.json({ message: err });
    });
}));
