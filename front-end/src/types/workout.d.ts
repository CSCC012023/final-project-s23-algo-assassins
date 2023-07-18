export type Dictionary<T> = {
  [key: string]: T;
};

export type Set = {
  set: number;
  lbs: number;
  reps: number;
  isComplete: boolean;
};

export type Exercise = {
  _id: string;
  name: string;
  img: any;
  description: string;
  notes: string;
  muscle: string;
  equipment: string;
  difficulty: number;
  __v: number;
  hasWeights: boolean;
  sets: Set[];
};

export type MuscleGroup = {
  muscle: string;
  exercises: Exercise[];
};
