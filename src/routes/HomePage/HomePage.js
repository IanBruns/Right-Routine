import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Hello, what would you like to do?</h2>
            <div className='home-options'>
                <div className='box'>
                    <p>Add Exercise</p>
                    <Link to='/home/add-workout'>
                        <button className='myButton'>Add</button>
                    </Link>
                </div>
                <div className='box'>
                    <p>Generate Workout</p>
                    <button className='myButton'>
                        Generate
                    </button>
                </div>
                <div className='box'>
                    <p>Add Workout Category</p>
                    <button className='myButton'>Add</button>
                </div>
            </div>
        </div>
    )
}