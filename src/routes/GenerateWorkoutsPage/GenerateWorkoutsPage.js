import React from 'react';
import Options from '../../components/Options/Options';

export default function GenerateWorkoutsPage(props) {
    const selectExercise = props.routines.map((mapRoutine) => {
        return (
            <Options key={mapRoutine.id}
                id={mapRoutine.id}
                name={mapRoutine.routine_name}
                removeRoutine={removeRoutine} />
        )
    });

    function removeRoutine(id) {
        console.log('test');
    }

    return (
        <div className='GenerateWorkoutsPage'>
            <h2>What workout would you like to do today</h2>
            {selectExercise}
        </div>
    )
}