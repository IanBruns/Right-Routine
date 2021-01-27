import React from 'react';
import ReactDOM from 'react-dom';
import AddExercisePage from './AddExercisePage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddExercisePage
        routines={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});