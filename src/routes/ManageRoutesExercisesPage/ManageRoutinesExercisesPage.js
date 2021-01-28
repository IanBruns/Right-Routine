import React, { useState, useEffect } from 'react';
import RoutinesApiService from '../../services/routines-api-service';
import './ManageRoutinesExercisePage.css';

export default function ManageRoutinesExercisesPage(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        RoutinesApiService.getRoutineExercises(props.match.params.routine_id)
            .then(res => {
                setExercises(res.sort());
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
            <div className='manage-routine box' key={mapExercise.id}>
                <p>{mapExercise.exercise_name}</p>
                <button className='myButton'
                    onClick={() => { if (window.confirm(`Are you sure you wish to delete ${mapExercise.name}?`)) handleDeleteClicked(mapExercise.id) }}>
                    Delete
                </button>
            </div>
        )
    })

    const noExercises = (
        <div className='box'>
            <p>
                Oh no!  It looks as if you have no exercises, return to home and
                add a few exercises
            </p>
        </div>
    )

    return (
        <div>
            {manageExercises.length > 0
                ? manageExercises
                : noExercises}
        </div>
    )
}