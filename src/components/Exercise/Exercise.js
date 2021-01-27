import React, { useState } from 'react';
import './Exercise.css';

export default function Exercise(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="exercise"
            onClick={() => setHidden(!hidden)}>
            <p>{`3 sets of ${props.name}('s)`}</p>
            <p>{(!hidden && props.description)}</p>
        </div>
    )
}