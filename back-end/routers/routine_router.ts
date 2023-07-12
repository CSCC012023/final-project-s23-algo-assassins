import { Router } from "express";
import { Routine } from '../models/Routine';
import { User } from '../models/User';

export const routineRouter = Router();

// Post your workout
routineRouter.post('/create', async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const routine = new Routine({
    userId: user._id,
    name: req.body.name,
    description: req.body.description,
    exercises: req.body.exercises,
  })
  routine.save()
      .then((data: any) => {
        return res.json(data);
      })
      .catch((err: any) => {
        return res.status(500).json({ message: err });
      })
});

// Get array of workouts
routineRouter.get('/get', async (req, res) => {
  const user = await User.findOne({ email: req.session.user_email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  Routine.find({ userId: user._id })
      .sort({ date: -1 })
      .then((data: any) => {
        res.json(data);
      })
      .catch((err: any) => {
        res.status(500).json({ message: err.message });
      });
});
