'use client';

import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import ExerciseConfigModal from './ExerciseConfigModal';
import { useState } from 'react';
import { addExercise } from '@/actions/exercisesActions';
import { type Exercise } from '@/types/exerciseTypes';

const AddExerciseButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onExerciseSave = async (newExercise: Exercise) => {
    await addExercise(newExercise);
  };

  return (
    <>
      <Button variant={'default'} onClick={() => setIsDialogOpen(true)}>
        <Plus className="mr-2 h-4 w-4" /> Add Exercise
      </Button>
      {isDialogOpen && (
        <ExerciseConfigModal
          onModalClose={() => setIsDialogOpen(false)}
          setIsDialogOpen={setIsDialogOpen}
          onExerciseSave={onExerciseSave}
        />
      )}
    </>
  );
};

export default AddExerciseButton;
