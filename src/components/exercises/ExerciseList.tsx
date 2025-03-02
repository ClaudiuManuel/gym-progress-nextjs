import { type ExerciseList } from '@/types/exerciseTypes';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { CardContent } from '../ui/card';
import { fetchExercisesByCategory } from '@/actions/exercisesActions';
import ExerciseOperationsButtons from './ExerciseOperationsButtons';

const ExerciseList: React.FC<ExerciseList> = async ({ categoryFilter }) => {
  const filteredExercises = await fetchExercisesByCategory(categoryFilter);

  return (
    <CardContent>
      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
        {filteredExercises.map((exercise) => {
          const { name, category, equipment } = exercise;
          return (
            <div key={exercise.id} className="flex items-center justify-between py-2">
              <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-gray-500">
                  {category} - {equipment}
                </p>
              </div>
              <div>
                <ExerciseOperationsButtons exercise={exercise} />
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </CardContent>
  );
};

export default ExerciseList;
