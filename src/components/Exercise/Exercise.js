import React from 'react';

export default function Exercise(props) {
    return (
        <div className="exercise">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}