import mongoose from "mongoose";

const ExerciseSetSchema = new mongoose.Schema({
  set: {
    type: Number,
    required: true,
  },
  lbs: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: Object,
    required: true,
  },
  description: {
    type: String,
  },
  muscle: {
    type: String,
    required: true,
  },
  equipment: {
    type: String,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  hasWeights: {
    type: Boolean,
    required: true,
  },
  sets: {
    type: [ExerciseSetSchema],
  }
});

export const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = { Exercise };