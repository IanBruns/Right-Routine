import React, { useState, useEffect } from 'react';
import RoutinesApiService from '../../services/routines-api-service';

export default function ManageRoutesExercisesPage(props) {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        RoutinesApiService.getRoutineExercises(props.match.params.routine_id)
            .then(res => {
                setExercises(res);
            })
    }, [props.match.params.routine_id])

    return (
        <p>Is stored in the balls</p>
    )
}