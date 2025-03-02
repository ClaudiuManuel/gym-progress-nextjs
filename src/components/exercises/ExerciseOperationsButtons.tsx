'use client';

import { Edit, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import ExerciseConfigModal from './ExerciseConfigModal';
import { useState } from 'react';
import { deleteExercise, updateExercise } from '@/actions/exercisesActions';
import { type Exercise } from '@/types/exerciseTypes';

const ExerciseOperationsButtons = ({ exercise }: { exercise: Exercise }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onExerciseSave = async (newExercise: Exercise) => {
    await updateExercise(newExercise);
  };

  return (
    <>
      <Button
        size="icon"
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button size="icon" onClick={() => deleteExercise(exercise.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
      {isDialogOpen && (
        <ExerciseConfigModal
          onModalClose={() => setIsDialogOpen(false)}
          setIsDialogOpen={setIsDialogOpen}
          onExerciseSave={onExerciseSave}
          exerciseToBeEdited={exercise}
        />
      )}
    </>
  );
};

export default ExerciseOperationsButtons;
