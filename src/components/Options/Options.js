import React from 'react';
import { Link } from 'react-router-dom';

export default function Options(props) {
    <div className='box'>
        {props.name}
        <br />

        <Link to={`/workout/${props.id}`}>
            <button className='myButton'>
                Select
                </button>
        </Link>
        <br />
        <Link to={`/manage/${props.id}`}>
            <button className='myButton'>
                Manage Exercises
                </button>
        </Link>
        <button className='myButton'>
            Delete Routine
                </button>
    </div>
}