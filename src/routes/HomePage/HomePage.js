import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Hello, what would you like to do?</h2>
            <div className='home-options'>
                <div className='box'>
                    <p>How to</p>
                    <p>
                        First add a routine or two, then assign some workouts to it
                        (shoot for at least 5 exercises for a routine).  From there you
                        can generate a workout where it will randomize and select 4
                        exercises for you
                    </p>
                </div>
                <div className='box'>
                    <p>Generate Workout</p>
                    <Link to='/generate-workout'>
                        <button className='myButton'>Generate</button>
                    </Link>
                </div>
                <div className='box'>
                    <p>Add Exercise Routine</p>
                    <Link to='/add-routine'>
                        <button className='myButton'>Add</button>
                    </Link>
                </div>
                <div className='box'>
                    <p>Add Exercise</p>
                    <Link to='/add-workout'>
                        <button className='myButton'>Add</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}