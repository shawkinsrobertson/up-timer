#Simple Exercise Tracker

This is a project to practice project documentation, primitives, and modular building on a simple inferface. Here, I will outline the components, behaviors, and relationships for an exercise/workout tracker.


## Scope for v1

- User should be able to enter exercises and the structure of that exercise (sets, reps, time, rest)
- User should be able to start and stop a workout
- User should be able to save a planned workout
- User should be able to load a saved planned workout
- User should be able to save a completed workout
- User should be able to start, stop, change, and restart work and rest timers



## Primitives

**Nouns**
    - Exercise (id and name)
    - Entry
        - reps/time (number + unit)
        - weight (number + unit)
        - sets (number)
        - notes (string)
    - timer (state - running? elapsed time)
    - workout (planned + completed)

**Verbs**
    - start
    - pause
    - stop
    - restart
    - add
    - subtract
    - load
    - save 
    - edit
    - search



## Project Structure

- workout, exercise, entry
- reps, sets, duration, weight, exericse name
- timer


UI (everything below - access timer, save/load/edit from storage, workouts, exercises, values)
    TIMER -> duration
    STORAGE (can store workouts, exercises, entries)
    WORKOUTS -> entries and their values
        entries
            exercise id
    EXERCISES
    VALUES
        exercise name
        sets
        reps
        weight
        duration
    
            