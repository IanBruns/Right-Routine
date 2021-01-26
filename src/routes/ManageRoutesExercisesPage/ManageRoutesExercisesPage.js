import React, { useState, useEffect } from 'react';
import RoutinesApiService from '../../services/routines-api-service';

export default function ManageRoutesExercisesPage(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        RoutinesApiService.getRoutineExercises(props.match.params.routine_id)
            .then(res => {
                setExercises(res);
            })
    }, [props.match.params.routine_id]);

    function handleDeleteClicked(exercise_id) {
        const newExercises = exercises.filter(exercise =>
            exercise.id !== exercise_id)

        RoutinesApiService.deleteExercise(props.match.params.routine_id, exercise_id)
            .then(() => {
                setExercises(newExercises);
            })
            .catch(err => {
                console.log(err);
            })
    }

    let manageExercises = exercises.map((mapExercise) => {
        return (
            <div className='manage-routine' key={mapExercise.id}>
                <p>{mapExercise.exercise_name}</p>
                <button
                    onClick={() => handleDeleteClicked(mapExercise.id)}>
                    Delete
                </button>
            </div>
        )
    })
    manageExercises.sort();

    return (
        <>
            {manageExercises}
        </>
    )
}