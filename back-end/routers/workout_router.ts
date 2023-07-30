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

type WorkoutProgress = {
  createdAt: Date;
  duration: number;
  totalVolume: number;
  totalReps: number;
};

// Get array of workout
workoutRouter.get('/getProgress', async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  Workout.find({ userId: user._id })
      .sort({ date: -1 })
      .then((data: any) => {
        const workoutprogress: WorkoutProgress[] = [];
        data.forEach((d: any) => {
          const exercises = JSON.parse(
            JSON.parse(JSON.stringify(d["exercises"]))
          );
          console.log(JSON.stringify(exercises, null, 4));
          workoutprogress.push({
            createdAt: d["createdAt"],
            duration: d["duration"],
            totalReps: Object.keys(exercises).reduce(
              (a: number, c: any) =>
                a +
                exercises[c]["sets"]
                  .filter((s: any) => s.isComplete != undefined && s.isComplete)
                  .reduce((b: number, d: any) => b + d["reps"], 0),
              0
            ),
            totalVolume: Object.keys(exercises).reduce(
              (a: number, c: any) =>
                a +
                exercises[c]["sets"]
                  .filter((s: any) => s.isComplete != undefined && s.isComplete)
                  .reduce((b: number, d: any) => b + d["lbs"], 0),
              0
            ),
          });
        });
        res.json(workoutprogress);
      })
      .catch((err: any) => {
        res.status(500).json({ message: err.message });
      });
});
