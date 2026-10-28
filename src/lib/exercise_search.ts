import { getExerciseIdByName } from "../../STORAGE/exerciseLibrary";

export async function searchExerciseIdByName(exerciseName: string): Promise<number> {
    return await getExerciseIdByName(exerciseName);
}