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

    const manageExercises = exercises.map((mapExercise, i) => {
        return (
            <div className='manage-routine' key={i}>
                <p>{mapExercise.exercise_name}</p>
                <button>Delete</button>
            </div>
        )
    })

    return (
        <>
            {manageExercises}
        </>
    )
}