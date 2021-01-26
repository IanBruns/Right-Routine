import React from 'react';
import { Link } from 'react-router-dom';

export default function GenerateWorkoutsPage(props) {
    const selectExercise = props.routines.map((mapRoutine, i) => {
        return (
            <div className='box' key={i}>
                {mapRoutine.routine_name}
                <br />

                <Link to={`/workout/${mapRoutine.id}`}>
                    <button className='myButton'>
                        Select
                </button>
                </Link>
                <br />
                <Link to={`/manage/${mapRoutine.id}`}>
                    <button className='myButton'>
                        Manage Exercises
                </button>
                </Link>
                <button className='myButton'>
                    Delete Routine
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