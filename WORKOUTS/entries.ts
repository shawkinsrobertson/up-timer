import { createRepsOrTime } from "../VALUES/reps_or_time";
import { createSets } from "../VALUES/sets";
import { createWeight } from "../VALUES/weight";
import { createRest } from "../VALUES/rest";
import { searchExerciseIdByName } from "../src/lib/exercise_search";

//edit this function to also take in user input for an exercise name. This name will be searched against existing exercise library and, if exercise exists, will append that exercise id to this entry. If it doens't exist, it will create a new exericse and then append that id to this entry. The function will return the entry with the exercise id attached. If there is an error, it will return the error message.

export async function createEntry(entry: { sets: number; repsOrTime: string; weight: number; rest: string; exerciseName: string }) {
    const setsResult = createSets(entry.sets);
    if (!setsResult.ok) {
        return { ok: false, error: setsResult.error };
    }

    const repsOrTimeResult = createRepsOrTime(entry.repsOrTime);
    if (!repsOrTimeResult.ok) {
        return { ok: false, error: repsOrTimeResult.error };
    }

    const weightResult = createWeight(entry.weight);
    if (!weightResult.ok) {
        return { ok: false, error: weightResult.error };
    }

    const restResult = createRest(entry.rest);
    if (!restResult.ok) {
        return { ok: false, error: restResult.error };
    }

    const exerciseName = entry.exerciseName.trim();
    if (exerciseName.length === 0) {
        return { ok: false, error: "exercise name cannot be empty" };
    }

    // Here you would typically check against an existing exercise library.
    // For this example, let's assume we have a function `getExerciseIdByName` that returns an ID if the exercise exists, or creates a new one if it doesn't.
    const exerciseId = await searchExerciseIdByName(exerciseName);

    return {
        ok: true,
        entry: {
            sets: setsResult.value,
            repsOrTime: repsOrTimeResult.value,
            weight: weightResult.value,
            rest: restResult.value,
            exerciseId: exerciseId,
            exerciseName: exerciseName,
        },
    };
}