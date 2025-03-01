'use server';

import { db } from '@/server/db';
import { exercises } from '@/server/db/schema';
import { type Exercise } from '@/types/exerciseTypes';

export const addExercise = async (newExercise: Exercise) => {
  await db.insert(exercises).values(newExercise);
};
