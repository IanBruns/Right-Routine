import React from 'react';
import Options from '../../components/Options/Options';
import './GenerateWorkoutsPage.css'

export default function GenerateWorkoutsPage(props) {
    const selectExercise = props.routines.map((mapRoutine) => {
        return (
            <Options key={mapRoutine.id}
                id={mapRoutine.id}
                name={mapRoutine.routine_name}
                removeRoutine={props.removeRoutine} />
        )
    });

    return (
        <div className='GenerateWorkoutsPage'>
            <h2>What workout would you like to do today</h2>
            <button className='myButton back-button'
                onClick={props.history.goBack}>
                Back
            </button>
            <br />
            {selectExercise}
        </div>
    )
}