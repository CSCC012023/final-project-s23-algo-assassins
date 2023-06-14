import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
      fieldname: {
        type: String,
      },
      originalname: {
        type: String,
      },
      encoding: {
        type: String,
      },
      mimetype: {
        type: String,
      },
      destination: {
        type: String,
      },
      filename: {
        type: String,
      },
      path: {
        type: String,
      },
      size: {
        type: Number,
      },
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
});

export const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = { Exercise };