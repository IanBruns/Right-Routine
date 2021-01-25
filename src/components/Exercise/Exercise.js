import React from 'react';

export default function Exercise(props) {
    return (
        <div className="exercise">
            <div className='exercise-text'>
                <p>{props.name}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}