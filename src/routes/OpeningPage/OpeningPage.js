import React from 'react';
import { Link } from 'react-router-dom';

export default function OpeningPage(props) {
    return (
        <div className='landing-page'>
            <div className='box'>
                <Link
                    to='/register'
                >
                    <h2>Sign up</h2>
                </Link>
            </div>
            <div className='box'>
                <Link
                    to='/login'
                >
                    <h2>Sign in</h2>
                </Link>
            </div>
            <div className='box'>
                <h2>About</h2>
            </div>
        </div>
    )
}