import { type Exercise, ExerciseCategory, ExerciseEquipmentType } from "@/types/exerciseTypes";

export const initialExercises: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    category: ExerciseCategory.CHEST,
    equipment: ExerciseEquipmentType.BARBELL,
  },
  {
    id: 2,
    name: "Squats",
    category: ExerciseCategory.LEGS,
    equipment: ExerciseEquipmentType.BARBELL,
  },
  {
    id: 3,
    name: "Deadlifts",
    category: ExerciseCategory.BACK,
    equipment: ExerciseEquipmentType.BARBELL,
  },
  {
    id: 4,
    name: "Pull-ups",
    category: ExerciseCategory.BACK,
    equipment: ExerciseEquipmentType.BODYWEIGHT,
  },
  {
    id: 5,
    name: "Shoulder Press",
    category: ExerciseCategory.SHOULDERS,
    equipment: ExerciseEquipmentType.BARBELL,
  },
  {
    id: 6,
    name: "Bicep Curls",
    category: ExerciseCategory.ARMS,
    equipment: ExerciseEquipmentType.DUMBELL,
  },
];
