import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { userRouter } from './routers/user_router';

import session from "express-session";

import cors from 'cors';
import { exerciseRouter } from './routers/exercise_router';

import { workoutRouter } from './routers/workout_router';

import { routineRouter } from './routers/routine_router';

dotenv.config();

export const app: Express = express();

app.use(bodyParser.json());

// Serve static files
app.use(express.static("static"));
// Allow CORS for all origins
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

// Connect to the database MongoDB Atlas
let dburl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.ha35gkz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(dburl)
  .then(() => {
    console.log('Connected to the database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  })

// Allows for sessions
app.use(
  session({
    secret: process.env.SECRET_KEY || "default",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

declare module "express-session" {
  interface SessionData {
    user_email: string;
  }
}

// Routes
app.use("/api/users", userRouter);
app.use("/api/exercises", exerciseRouter);
app.use("/api/workouts", workoutRouter);
app.use("/api/routines", routineRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});