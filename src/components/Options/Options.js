import React from 'react';
import { Link } from 'react-router-dom';

export default function Options(props) {
    return (
        <div className='box'>
            {props.name}
            <br />
            <Link to={`/manage/${props.id}`}>
                <button className='myButton'>
                    Select
                </button>
            </Link>
            <button className='myButton'>
                Delete Routine
            </button>
        </div>
    )
}