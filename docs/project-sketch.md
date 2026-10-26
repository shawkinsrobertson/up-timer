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
    

## Conditions

For EXERCISES library (built as user enters and saves exercises), the strings 'Back Squat' and 'back squat' are the same exercise (also 'BB Back Squat'). Cleanest way to not have duplicates is to make exercise name input also conduct a search query upon keydown.

/*
    function createEntry({name, sets, reps, weight, duration}) {
        //'contains' search on entry name in db EXERCISES
        //if exists, append existing exercise id to entry
        //if no, createExercise(){}
        //take existing/new exericse id, sets, reps or time, weight, and rest
        //create new entry in a workout session
    }

    **test cases**
    SETS
        sets 3, reps 10, weight 135, rest 90 --> A
        sets 0, reps 10, weight 135, rest 90 --> R (sets cannot be < 1)
        sets -3, reps 10, weight 30, rest 30 --> R (sets cannot be < 1)
        sets , reps 10, weight 135, rest 90 --> R (sets cannot be undefined)
        sets 3.5, reps 10, weight 135, rest 90 --> R (sets must be a whole number)
    
    REPS/TIME
        sets 3, reps 10, weight 135, rest 90 --> A
        sets 3, reps 10s, weight 135, rest 90 --> A
        sets 3, reps 100s, weight 135, rest 90 --> A
        sets 3, reps 1:30, weight 135, rest 90 --> A
        sets 3, reps 1:30s, weight 135, rest 90 --> A
        sets 3, reps -10, weight 135, rest 90 --> R (reps cannot be < 1)
        sets 3, reps 1.3, weight 135, rest 90 --> R (reps must be a whole number)
        sets 3, reps , weight 135, rest 90 --> R (reps/time cannot be undefined)
        sets 3, reps 0, weight 135, rest 90 --> R (reps cannot be < 1)
        sets 3, reps abc, weight 135, rest 90 --> R (reps/time must be either a whole number, a duration -40s- or time in M:SS format)
        sets 3, reps 1:75, weight 135, rest 90 --> R (cannot have more than 0:59 seconds in M:SS format)
        
    
    WEIGHT
        sets 2, reps 40s, weight 0, rest 20 --> A
        sets 2, reps 40s, weight 80, rest 20 --> A
        sets 2, reps 40s, weight -90, rest 20 --> R (weight cannot be < 0)
        sets 2, reps 40s, weight 17.5, rest 20 --> A
        sets 2, reps 40s, weight , rest 20 --> A (undefined weight defaults to 0)
    
    REST
        sets 3, reps 10s, weight 135, rest 90s --> A
        sets 3, reps 10s, weight 135, rest 1:30 --> A
        sets 3, reps 10s, weight 135, rest 1:30s --> A
        sets 3, reps 10s, weight 135, rest 0 --> A
        sets 3, reps 10s, weight 135, rest  --> A (undefined rest defaults to 0)
        sets 3, reps 10s, weight 135, rest -30 --> A (rest cannot be < 0)
        sets 3, reps 10s, weight 135, rest abc --> R (rest must be in either seconds (40s) or time in M:SS format)
        sets 3, reps 10s, weight 135, rest 1:75 --> R (cannot have more than 0:59 seconds in M:SS format)
*/