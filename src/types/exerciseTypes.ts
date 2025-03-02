export enum ExerciseCategory {
  ALL = 'All',
  CHEST = 'Chest',
  LEGS = 'Legs',
  BACK = 'Back',
  SHOULDERS = 'Shoulders',
  ARMS = 'Arms',
}

export enum ExerciseEquipmentType {
  MACHINE = 'Machine',
  BODYWEIGHT = 'Bodyweight',
  DUMBELL = 'Dumbell',
  BARBELL = 'Barbell',
}

export type Exercise = {
  id: number;
  name: string;
  category: ExerciseCategory;
  equipment: ExerciseEquipmentType;
};

export type ExerciseConfigModalProps = {
  onModalClose: (open: boolean) => void;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onExerciseSave: (newExercise: Exercise) => void;
  exerciseToBeEdited?: Exercise;
};

export type ExerciseList = {
  categoryFilter?: ExerciseCategory;
};
