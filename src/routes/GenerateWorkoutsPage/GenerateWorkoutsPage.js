import React from 'react';

export default function GenerateWorkoutsPage(props) {
    const selectExercise = props.routines.map((mapRoutine, i) => {
        return (
            <div className='box' key={i}>
                {mapRoutine.routine_name}
                <br />
                <button className='myButton'>
                    Select
                </button>
            </div>
        )
    });

    return (
        <div className='GenerateWorkoutsPage'>
            <h2>What workout would you like to do today</h2>
            {selectExercise}
        </div>
    )
}