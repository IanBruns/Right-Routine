import React from 'react';
import Options from '../../components/Options/Options';

export default function GenerateWorkoutsPage(props) {
    const selectExercise = props.routines.map((mapRoutine, i) => {
        return (
            <Options key={i}
                id={mapRoutine.id}
                name={mapRoutine.name} />
        )
    });

    return (
        <div className='GenerateWorkoutsPage'>
            <h2>What workout would you like to do today</h2>
            {selectExercise}
        </div>
    )
}