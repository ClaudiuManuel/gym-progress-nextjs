import {
  ExerciseCategory,
  ExerciseEquipmentType,
  type Exercise,
} from "@/types/exerciseTypes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ExerciseConfigModalProps = {
  onModalClose: (open: boolean) => void;
  exerciseToBeEdited: Exercise | undefined;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onExerciseSave: (newExercise: Exercise) => void;
};

const defaultExerciseConfiguration = (): Exercise => ({
  id: Math.floor(Math.random() * 1000), // Random ID for now
  name: "",
  category: ExerciseCategory.CHEST,
  equipment: ExerciseEquipmentType.BARBELL,
});

const ExerciseConfigModal: React.FC<ExerciseConfigModalProps> = ({
  onModalClose,
  setIsDialogOpen,
  exerciseToBeEdited,
  onExerciseSave,
}) => {
  const actionForExercise = exerciseToBeEdited ? "Edit" : "Add";
  const [exerciseDetails, setExerciseDetails] = useState<Exercise>(
    exerciseToBeEdited
      ? { ...exerciseToBeEdited }
      : defaultExerciseConfiguration(),
  );

  const handleModalSubmit = () => {
    if (!exerciseDetails.name) {
      alert("Please fill in all fields.");
      return;
    }
    onExerciseSave(exerciseDetails);
    setExerciseDetails(defaultExerciseConfiguration());
    setIsDialogOpen(false);
  };

  return (
    <Dialog open onOpenChange={onModalClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`${actionForExercise} exercise`}</DialogTitle>
          <DialogDescription>
            {`${actionForExercise} the details of your exercise.`}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={exerciseDetails.name}
              className="col-span-3"
              onChange={(event) => {
                setExerciseDetails({
                  ...exerciseDetails,
                  name: event.target.value,
                });
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select
              value={exerciseDetails.category}
              onValueChange={(value) =>
                setExerciseDetails({
                  ...exerciseDetails,
                  category: value as ExerciseCategory,
                })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ExerciseCategory)
                  .filter((c) => c !== ExerciseCategory.ALL)
                  .map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Equipment
            </Label>
            <Select
              value={exerciseDetails.equipment}
              onValueChange={(value) =>
                setExerciseDetails({
                  ...exerciseDetails,
                  equipment: value as ExerciseEquipmentType,
                })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select an equipment" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ExerciseEquipmentType).map((equipment) => (
                  <SelectItem key={equipment} value={equipment}>
                    {equipment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant={"default"} onClick={handleModalSubmit}>
            {exerciseToBeEdited ? "Update" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseConfigModal;
