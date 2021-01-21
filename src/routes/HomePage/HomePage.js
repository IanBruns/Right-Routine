import React from 'react';

export default function HomePage(props) {
    return (
        <>
            <h2>Hello, what would you like to do?</h2>
            <div className='home-options'>
                <div className='box'>
                    <p>Add Exercise</p>
                    <button className='myButton'>Add</button>
                </div>
                <div className='box'>
                    <p>Generate Workout</p>
                    <button className='myButton'>Generate</button>
                </div>
                <div className='box'>
                    <p>Add Workout Category</p>
                    <button className='myButton'>Add</button>
                </div>
            </div>
        </>
    )
}