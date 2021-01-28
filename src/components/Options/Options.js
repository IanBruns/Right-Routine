import React from 'react';
import { Link } from 'react-router-dom';
import './Options.css';

export default function Options(props) {
    return (
        <div className='box'>
            {props.name}
            <br />
            <Link to={`/workout/${props.id}`}>
                <button className='myButton options-button'>
                    Workout
                </button>
            </Link>
            <br />
            <Link to={`/manage/${props.id}`}>
                <button className='myButton options-button'>
                    Manage
                </button>
            </Link>
            <br />
            <button className='myButton'
                onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) props.removeRoutine(props.id) }}>
                Delete Routine
            </button>
        </div>
    )
}