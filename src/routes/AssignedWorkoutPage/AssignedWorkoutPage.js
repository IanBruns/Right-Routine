import React, { useState, useEffect } from 'react';
import RoutinesApiService from '../../services/routines-api-service';
import './AssignedWorkoutPage.css'

export default function AssignedWorkoutPage(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        RoutinesApiService.getRoutineExercises(props.match.params.routine_id)
            .then(res => {
                setExercises(res);
            })
    }, [props.match.params.routine_id])

    let numberOfExercises = 4;

    const exercisesCopy = exercises.map((exercise, i) => {
        return (
            <div className="exercise" key={i}>
                <div className='exercise-text'>
                    <p>{exercise.exercise_name}</p>
                    <p>{exercise.exercise_description}</p>
                </div>
            </div>
        )
    })

    const todaysWorkout = exercisesCopy.slice(0, numberOfExercises);

    return (
        <>
            <h2>Today's workout</h2>
            {todaysWorkout}
        </>
    )
}