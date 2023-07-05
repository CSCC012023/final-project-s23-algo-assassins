import { Router } from "express";
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

export const userRouter = Router();

userRouter.post('/send/verification', async (req, res) => {
    // Generate token here and send an email
    const { email, key } = req.body;
    // Find user by email
    const user = await User.findOne({ email: email });
    if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    // Create mail with options
    const mailer = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'algoassassins@gmail.com',
            pass: 'zchdrxzgkermwgah'
        }
    });
    const mailOptions = {
        from: 'algoassassins@gmail.com',
        to: email,
        subject: 'Email Verification',
        text: 'Enter the following code to verify your email: ' + key
    };
    // Send the mail
    mailer.sendMail(mailOptions, (error: Error | null, info: nodemailer.SentMessageInfo) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send verification email' });
            return;
        } else {
            res.status(200).json({ message: 'Verification email sent successfully' });
            return;
        }
    });
});

userRouter.post('/password/reset', async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    // Password validation
    if (password.length < 1 || password != confirmPassword) {
        res.status(400).json({ message: "Invalid password content" });
        return;
    }
    // Finding user by email
    const user = await User.findOne({ email: email });
    if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    // Encrypting new password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const pass = bcrypt.hashSync(password, salt);

    user.password = pass;
    user.save()
        .then((data: any) => {
            res.status(200).json({ message: "Password updated" });
            return;
        })
        .catch((error: any) => {
            res.status(500).json({ message: "Update failed" });
            return;
        });
    return;
});

// Requires email, password, name of user
// Signup the user but does not create session for user
userRouter.post('/signup', async (req, res) => {
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
    const salt = bcrypt.genSaltSync(saltRounds);
    const password = bcrypt.hashSync(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password,
        age: 0,
        weight: 0,
        height: 0,
    });
    user.save()
        .then((data: any) => {
            return res.json(data);
        })
        .catch((err: any) => {
            return res.status(500).json({ message: err });
        });
});

// Requires email and password to identify
// Log in the user and creates a session
// check if null = undefined, could be empty stringss
userRouter.post('/login', async (req, res) => {
    if (req.body.password === undefined) {
        res.status(400).json({ message: "Password Required" });
        return;
    }
    if (req.body.email === undefined) {
        res.status(400).json({ message: "Email Required" });
        return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const password = bcrypt.compareSync(req.body.password, user.password);
    if (!password) {
        res.status(400).json({ message: "Password Incorrect" });
        return;
    }
    req.session.user_email = user.email;
    return res.json(user);
});

// Removes the current user from session
userRouter.post('/signout', async (req, res) => {
    req.session.user_email = ""
    return res.json({ "signout": "true" })
});

// Current User logged in
userRouter.get('/me', async (req, res) => {
    const user = await User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
});

// Used to find a user by email
userRouter.get('/find', async (req, res) => {
    const email = req.query.email;
    const user = await User.findOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
});

// Used to delete a user by email
userRouter.delete('/delete', async (req, res) => {
    const email = req.query.email;
    const user = await User.deleteOne({ email: email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user);
});

// Used to update current user's age
userRouter.patch('/update/age', async (req, res) => {
    if (req.body.age === undefined) {
        res.status(400).json({ message: "Age is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = await User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.age = req.body.age;
    user.save()
        .then((data: any) => {
            return res.json(data);
        }
        )
        .catch((err: any) => {
            return res.status(500).json({ message: err });
        }
        );
});

// Used to update current user's weight
userRouter.patch('/update/weight', async (req, res) => {
    if (req.body.weight === undefined) {
        res.status(400).json({ message: "Weight is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = await User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.weight = req.body.weight;
    user.save()
        .then((data: any) => {
            return res.json(data);
        }
        )
        .catch((err: any) => {
            return res.status(500).json({ message: err });
        }
        );
});

// Used to update current user's height
userRouter.patch('/update/height', async (req, res) => {
    if (req.body.height === undefined) {
        res.status(400).json({ message: "Height is required" });
        return;
    }
    if (req.session.user_email === undefined) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = await User.findOne({ email: req.session.user_email });
    if (user === null) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    user.height = req.body.height;
    user.save()
        .then((data: any) => {
            return res.json(data);
        }
        )
        .catch((err: any) => {
            return res.status(500).json({ message: err });
        }
        );
});