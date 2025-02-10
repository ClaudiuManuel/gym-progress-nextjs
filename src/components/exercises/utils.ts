import { ExerciseCategory, ExerciseEquipmentType, type Exercise } from '@/types/exerciseTypes';

export const createDefaultExercise = (): Exercise => ({
  id: Math.floor(Math.random() * 1000), // Random ID for now
  name: '',
  category: ExerciseCategory.CHEST,
  equipment: ExerciseEquipmentType.BARBELL,
});
