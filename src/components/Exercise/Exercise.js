import React from 'react';

export default function Exercise(props) {
    function randomizeReps() {
        return Math.floor(Math.random() * (8 - 6 + 1) + 6);
    }

    return (
        <div className="exercise">
            <p>{`3 sets of ${randomizeReps()} ${props.name}('s)`}</p>
            <p>{props.description}</p>
        </div>
    )
}