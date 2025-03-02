import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { type ExerciseCategory } from '@/types/exerciseTypes';
import ExerciseList from '@/components/exercises/ExerciseList';
import CategoryFilter from '@/components/exercises/CategoryFilter';
import AddExerciseButton from '@/components/exercises/AddExerciseButton';

type SearchParams = {
  category: ExerciseCategory;
};

export default async function Exercises({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { category } = await searchParams;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Exercise Library</CardTitle>
        <div className="flex flex-row gap-2">
          <CategoryFilter />
          <AddExerciseButton />
        </div>
      </CardHeader>
      <ExerciseList categoryFilter={category} />
    </Card>
  );
}
