import React from 'react';
import { Link } from 'react-router-dom';

export default function OpeningPage(props) {
    return (
        <div className='landing-page'>
            <div className='box'>
                <h2>Welcome to Right Routine!</h2>
                <p>
                    If you're a self starter when it comes to workouts,
                    then you're in the right place!
                </p>
            </div>
            <div className='box'>
                <p>
                    Here, you can create your own routines and assign exercises
                    to them
                </p>
                <p>Routines such as:</p>
                <ul>
                    <li>Push Day</li>
                    <li>Abs</li>
                    <li>Leg Day - (You're not skipping this one)</li>
                </ul>
            </div>
            <div className='box'>
                <p>
                    THen when you want to work out, you can choose a day and get
                    a randomized exercises to do that day
                </p>
                <p>
                    You can add, but you can't subtract (come on)
                </p>
            </div>
            <div className='box'>
                <h3>Now go get gains</h3>
                <Link
                    to='/register'
                >
                    <h3>Sign up</h3>
                </Link>
                <Link
                    to='/login'
                >
                    <h3>Sign in</h3>
                </Link>
            </div>
        </div>
    )
}