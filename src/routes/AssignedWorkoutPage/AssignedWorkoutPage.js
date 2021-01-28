import React, { useState, useEffect } from 'react';
import Exercise from '../../components/Exercise/Exercise';
import RoutinesApiService from '../../services/routines-api-service';
import './AssignedWorkoutPage.css'

export default function AssignedWorkoutPage(props) {
    const [totalExercises, setTotalExercises] = useState(4);
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        RoutinesApiService.getRoutineExercises(props.match.params.routine_id)
            .then(res => {
                setExercises(res);
            })
    }, [props.match.params.routine_id])

    const exercisesCopy = exercises.map((exercise) => {
        return (
            <Exercise
                key={exercise.id}
                name={exercise.exercise_name}
                description={exercise.exercise_description}
            />
        )
    })

    function generateAssignedExercises(numberOfExercises) {
        const todaysWorkout = exercisesCopy.slice(0, numberOfExercises);
        return todaysWorkout;
    }

    return (
        <div className='AssignedWorkoutPage'>
            <h2>Today's workout</h2>
            <button className='myButton addAnother'
                onClick={() => setTotalExercises(totalExercises + 1)}>
                Add Another
            </button>
            {generateAssignedExercises(totalExercises)}
        </div>
    )
}