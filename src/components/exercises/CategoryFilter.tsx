'use client';

import { ExerciseCategory } from '@/types/exerciseTypes';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const categoryFilter = searchParams.get('category') ?? ExerciseCategory.ALL;

  const handleCategoryChange = (category: ExerciseCategory) => {
    const params = new URLSearchParams(searchParams);

    if (category === ExerciseCategory.ALL) {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <Select
      onValueChange={(newSelectedCategory) => handleCategoryChange(newSelectedCategory as ExerciseCategory)}
      defaultValue={ExerciseCategory.ALL}
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
  );
};

export default CategoryFilter;
