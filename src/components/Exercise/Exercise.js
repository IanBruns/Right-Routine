import React, { useState } from 'react';

export default function Exercise(props) {
    const [hidden, setHidden] = useState(true);

    function randomizeReps() {
        return Math.floor(Math.random() * (8 - 6 + 1) + 6);
    }

    return (
        <div className="exercise"
            onClick={() => setHidden(!hidden)}>
            <p>{`3 sets of ${randomizeReps()} ${props.name}('s)`}</p>
            <p>{(!hidden && props.description)}</p>
        </div>
    )
}