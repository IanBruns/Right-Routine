import React, { useState } from 'react';
import './Exercise.css';

export default function Exercise(props) {
    const [hidden, setHidden] = useState(true);

    return (
        <div className="exercise box"
            onClick={() => setHidden(!hidden)}>
            <p className='set-name'>{`3 sets of ${props.name}('s)`}</p>
            <p>{(!hidden && props.description)}</p>
        </div>
    )
}