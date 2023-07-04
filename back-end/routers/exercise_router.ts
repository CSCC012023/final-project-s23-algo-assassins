import { Router } from "express";
import { Exercise } from '../models/Exercise';
import bcrypt from 'bcrypt';

export const exerciseRouter = Router();

// Used to exercise by name
exerciseRouter.get('/find', async (req, res) => {
  const name = req.query.name;
  const exercise = await Exercise.findOne({ name: name });
  if (exercise === null) {
      res.status(400).json({ message: "Exercise not found" });
      return;
  }
  return res.json(exercise);
});

// Used to get all exercises grouped by their muscle
exerciseRouter.get('/groupedExercises', async (req, res) => {
  const group = 'muscle';
  const exercises = (await Exercise.find().sort({name: 'asc', muscle: 'asc'})).filter((exercise) => {
    return exercise.muscle != undefined;
  });

  const groupedExercisesObject: any = {};

  exercises.forEach((exercise) => {
    if (groupedExercisesObject[exercise[group]] != undefined) {
      groupedExercisesObject[exercise[group]].push(exercise); 
    } else {
      groupedExercisesObject[exercise[group]] = [exercise];
    }
  });

  const groupedExercisesArray: any[] = [];

  Object.keys(groupedExercisesObject).forEach((key) => {
    groupedExercisesArray.push({
      muscle: key, exercises: groupedExercisesObject[key]
    })
  });

  return res.json(groupedExercisesArray);
});