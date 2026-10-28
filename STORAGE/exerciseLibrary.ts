// STORAGE/exerciseLibrary.ts
import { openExerciseDb } from "./db";

type ExerciseRecord = {
  id: number;
  name: string;
  createdAt: string;
};

export async function getExerciseIdByName(exerciseName: string): Promise<number> {
  const db = await openExerciseDb();
  const name = exerciseName.trim();

  return new Promise((resolve, reject) => {
    const tx = db.transaction("exerciseLibrary", "readwrite");
    const store = tx.objectStore("exerciseLibrary");
    const request = store.getAll();

    request.onsuccess = () => {
      const existing = request.result.find(
        (item: ExerciseRecord) => item.name.toLowerCase() === name.toLowerCase()
      );

      if (existing) {
        resolve(existing.id);
        return;
      }

      const nextId = Date.now();
      const record: ExerciseRecord = {
        id: nextId,
        name,
        createdAt: new Date().toISOString(),
      };

      const addRequest = store.add(record);
      addRequest.onsuccess = () => resolve(nextId);
      addRequest.onerror = () => reject(addRequest.error);
    };

    request.onerror = () => reject(request.error);
  });
}