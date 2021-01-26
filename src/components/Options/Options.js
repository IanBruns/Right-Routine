import React from 'react';
import { Link } from 'react-router-dom';

export default function Options(props) {
    return (
        <div className='box'>
            {props.name}
            <Link to={`/workout/${props.id}`}>
                <button className='myButton'>
                    Workout
                </button>
            </Link>
            <br />
            <Link to={`/manage/${props.id}`}>
                <button className='myButton'>
                    Manage
                </button>
            </Link>
        </div>
    )
}