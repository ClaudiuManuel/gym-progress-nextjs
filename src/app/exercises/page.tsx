"use client";

import React, { useState } from "react";
import { Edit, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type Exercise, ExerciseCategory } from "@/types/exerciseTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialExercises } from "@/lib/constants";
import ExerciseConfigModal from "@/components/navbar/ExerciseConfigModal";

export default function Exercises() {
  const [categoryFilter, setCategoryFilter] = useState<ExerciseCategory>(
    ExerciseCategory.ALL,
  );
  const [exercises, setExercises] = useState<Exercise[]>(initialExercises);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [exerciseToBeEdited, setExerciseToBeEdited] = useState<
    Exercise | undefined
  >();

  const filteredExercises =
    categoryFilter === ExerciseCategory.ALL
      ? exercises
      : exercises.filter((exercise) => exercise.category === categoryFilter);

  const deleteExercise = (deletedExerciseId: number) => {
    const newExercises = exercises.filter(
      (exercise) => exercise.id !== deletedExerciseId,
    );
    setExercises(newExercises);
  };

  const onExerciseSave = (newExercise: Exercise) => {
    if (exerciseToBeEdited) {
      const updatedExercises = exercises.map((exercise) => {
        if (exercise.id === exerciseToBeEdited.id) {
          return newExercise;
        }
        return exercise;
      });
      setExercises(updatedExercises);
    } else {
      setExercises([...exercises, newExercise]);
    }
  };

  const onModalClose = (_: boolean) => {
    setIsDialogOpen(false);
    setExerciseToBeEdited(undefined);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Exercise Library</CardTitle>
        <div className="flex flex-row gap-2">
          <Select
            onValueChange={(newSelectedCategory) =>
              setCategoryFilter(newSelectedCategory as ExerciseCategory)
            }
            value={categoryFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue>{categoryFilter}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(ExerciseCategory).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant={"default"} onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Exercise
          </Button>
          {isDialogOpen && (
            <ExerciseConfigModal
              onModalClose={onModalClose}
              setIsDialogOpen={setIsDialogOpen}
              exerciseToBeEdited={exerciseToBeEdited}
              onExerciseSave={onExerciseSave}
            />
          )}
        </div>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          {filteredExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between py-2"
            >
              <div>
                <h3 className="font-medium">{exercise.name}</h3>
                <p className="text-sm text-gray-500">
                  {exercise.category} - {exercise.equipment}
                </p>
              </div>
              <div>
                <Button
                  size="icon"
                  onClick={() => {
                    setExerciseToBeEdited(exercise);
                    setIsDialogOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" onClick={() => deleteExercise(exercise.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
