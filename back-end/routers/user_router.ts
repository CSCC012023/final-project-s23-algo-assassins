import { Router } from "express";
import nodemailer from "nodemailer";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

export const userRouter = Router();

userRouter.post("/send/verification", async (req, res) => {
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
    service: "Gmail",
    auth: {
      user: "algoassassins@gmail.com",
      pass: "yrnsoldxecwdubxx",
    },
  });
  const mailOptions = {
    from: "algoassassins@gmail.com",
    to: email,
    subject: "Email Verification",
    text: "Enter the following code to verify your email: " + key,
  };
  // Send the mail
  mailer.sendMail(
    mailOptions,
    (error: Error | null, info: nodemailer.SentMessageInfo) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send verification email" });
        return;
      } else {
        res
          .status(200)
          .json({ message: "Verification email sent successfully" });
        return;
      }
    }
  );
});

userRouter.post("/password/reset", async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  // Password validation
  if (password.length < 6 || password != confirmPassword) {
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
  user
    .save()
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

const upload = multer({ dest: "uploads/" });

// Requires email, password, name of user
// Signup the user and create session for user
userRouter.post("/signup", async (req, res) => {
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
  if (req.body.username === undefined) {
    res.status(400).json({ message: "Username is required" });
    return;
  }
  if (req.body.img === undefined) {
    res.status(400).json({ message: "Image is required" });
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
    username: req.body.username,
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
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
    req.session.user_email = user.email;
    user
        .save()
        .then((data: any) => {
            return res.json(data);
        })
        .catch((err: any) => {
            console.log(err);
            return res.status(500).json({ message: err });
        });
});

// Requires email and password to identify
// Log in the user and creates a session
// check if null = undefined, could be empty stringss
userRouter.post("/login", async (req, res) => {
  console.log("login reached");
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
userRouter.post("/signout", async (req, res) => {
  req.session.user_email = "";
  return res.json({ signout: "true" });
});

// Current User logged in
userRouter.get("/me", async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  return res.json(user);
});

// Used to find a user by email
userRouter.get("/find", async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email: email });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  return res.json(user);
});

// Used to search a user by name
userRouter.get("/search/:name", async (req, res) => {
  const name = req.param.name;
  const user = await User.findOne({ name: name });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  return res.json(user);
});

// Used to delete a user by email
userRouter.delete("/delete", async (req, res) => {
  const email = req.query.email;
  const user = await User.deleteOne({ email: email });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  return res.json(user);
});

// Used to update current user's age
userRouter.patch("/update/age", async (req, res) => {
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
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update current user's weight
userRouter.patch("/update/weight", async (req, res) => {
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
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update current user's height
userRouter.patch("/update/height", async (req, res) => {
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
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update user's name by email
userRouter.post("/update/name", async (req, res) => {
  const find = req.session.user_email;
  if (find === undefined) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  if (req.body.name === undefined) {
    res.status(400).json({ message: "name is required" });
    return;
  }
  const user = await User.findOne({ email: find });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  user.name = req.body.name;
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update user's username by email
userRouter.post("/update/username", async (req, res) => {
  const find = req.session.user_email;
  if (find === undefined) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  if (req.body.username === undefined) {
    res.status(400).json({ message: "name is required" });
    return;
  }
  const user = await User.findOne({ email: find });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  user.username = req.body.username;
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update user's biography by email
userRouter.post("/update/biography", async (req, res) => {
  const find = req.session.user_email;
  if (find === undefined) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  if (req.body.biography === undefined) {
    res.status(400).json({ message: "name is required" });
    return;
  }
  const user = await User.findOne({ email: find });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  user.biography = req.body.biography;
  user
    .save()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to update user's profile picture by email
userRouter.post("/update/picture", upload.single("img"), (req, res) => {
  const find = req.session.user_email;
  if (find === undefined) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  if (req.file === undefined) {
    res.status(400).json({ message: "Image is required" });
    return;
  }
  const user = User.findOne({ email: find });
  user.then((data: any) => {
    data.img = req.file;
    data
      .save()
      .then((data: any) => {
        return res.json(data);
      })
      .catch((err: any) => {
        return res.status(500).json({ message: err });
      });
  });
});

// get user profile picture by email
userRouter.get("/img", (req, res) => {
  const email = req.query.email;
  if (email === undefined) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  User.findOne({ email: email })
    .then((u: any) => {
      res.setHeader("Content-Type", u.img.mimetype);
      res.sendFile(u.img.path, { root: path.resolve() });
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to create a user follow connection
// Followed email is the user that is being followed
// Follower email is the user that is following
userRouter.patch("/create/follow", async (req, res) => {
  const followed = req.body.followed_email;
  const follower = req.body.follower_email;
  console.log("create follow reached");
  if (followed === undefined || follower === undefined) {
    res
      .status(400)
      .json({ message: "Following email and Follower email are required" });
    return;
  }
  const user1 = await User.findOne({ email: followed });
  const user2 = await User.findOne({ email: follower });
  if (user1 === null || user2 === null) {
    res.status(400).json({ message: "A user is not found" });
    return;
  }
  if (user1.followers.includes(user2.email)) {
    res.status(400).json({ message: "User already followed" });
    return;
  }
  user1.followers.push(user2.email);
  user2.following.push(user1.email);

  user1
    .save()
    .then((data: any) => {
      user2
        .save()
        .then((data: any) => {
          return res.json(data);
        })
        .catch((err: any) => {
          return res.status(500).json({ message: err });
        });
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// Used to remove a user follow connection
// Followed email is the user that is being followed currently
// Follower email is the user that is following currently
userRouter.patch("/remove/follow", async (req, res) => {
  const followed = req.body.followed_email;
  const follower = req.body.follower_email;
  if (followed === undefined || follower === undefined) {
    res
      .status(400)
      .json({ message: "Following email and Follower email are required" });
    return;
  }
  const user1 = await User.findOne({ email: followed });
  const user2 = await User.findOne({ email: follower });
  if (user1 === null || user2 === null) {
    res.status(400).json({ message: "A user is not found" });
    return;
  }
  user1.followers = user1.followers.filter(
    (email: string) => email !== user2.email
  );
  user2.following = user2.following.filter(
    (email: string) => email !== user1.email
  );

  user1
    .save()
    .then((data: any) => {
      user2
        .save()
        .then((data: any) => {
          return res.json(data);
        })
        .catch((err: any) => {
          return res.status(500).json({ message: err });
        });
    })
    .catch((err: any) => {
      return res.status(500).json({ message: err });
    });
});

// User's friends
// friend is where another user is in both following and followers
userRouter.get("/friends", async (req, res) => {
  console.log("friends reached");
  const email = req.query.email;
  if (email === undefined) {
    res.status(400).json({ message: "Email is required" });
    return;
  }
  const user = await User.findOne({ email: email });
  if (user === null) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  const friends = user.following.filter((email: string) =>
    user.followers.includes(email)
  );
  return res.json(friends);
});

// Fetch the list of users being followed by the current user
userRouter.get("/get/follow", async (req, res) => {
    const userEmail = req.session.user_email;
    if (!userEmail) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const user = await User.findOne({ email: userEmail });
    if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    return res.json(user.following);
});
