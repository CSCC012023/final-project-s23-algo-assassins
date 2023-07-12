import { Router } from "express";
import { Exercise } from '../models/Exercise';
import { Workout } from '../models/Workout';
import { User } from '../models/User';

export const workoutRouter = Router();

// Post your workout
workoutRouter.post('/create', async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const workout = new Workout({
    userId: user._id,
    description: req.body.description,
    duration: req.body.duration,
    createdAt: req.body.date,
    exercises: req.body.exercises,
    totalVolume: req.body.totalVolume,
  })
  workout.save()
      .then((data: any) => {
        return res.json(data);
      })
      .catch((err: any) => {
        return res.status(500).json({ message: err });
      })
});

// Get array of workouts
workoutRouter.get('/get', async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  Workout.find({ userId: user._id })
      .sort({ date: -1 })
      .then((data: any) => {
        res.json(data);
      })
      .catch((err: any) => {
        res.status(500).json({ message: err.message });
      });
});
