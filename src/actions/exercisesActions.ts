'use server';

import { db } from '@/server/db';
import { exercises } from '@/server/db/schema';
import { type ExerciseCategory, type Exercise, type ExerciseEquipmentType } from '@/types/exerciseTypes';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const fetchExercisesByCategory = async (category?: ExerciseCategory): Promise<Exercise[]> => {
  const filteredExercises = category
    ? await db.select().from(exercises).where(eq(exercises.category, category))
    : await db.select().from(exercises);

  return filteredExercises.map((exercise) => ({
    ...exercise,
    equipment: exercise.equipment as ExerciseEquipmentType,
    category: exercise.category as ExerciseCategory,
  }));
};

export const addExercise = async (newExercise: Exercise) => {
  await db.insert(exercises).values(newExercise);
  revalidatePath('/exercises');
};

export const deleteExercise = async (exerciseId: number) => {
  await db.delete(exercises).where(eq(exercises.id, exerciseId));
  revalidatePath('/exercises');
};

export const updateExercise = async (updatedExercise: Exercise) => {
  await db
    .update(exercises)
    .set({ ...updatedExercise })
    .where(eq(exercises.id, updatedExercise.id));
  revalidatePath('/exercises');
};
