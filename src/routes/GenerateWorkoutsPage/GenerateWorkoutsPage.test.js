import React from 'react';
import ReactDOM from 'react-dom';
import GenerateWorkoutsPage from './GenerateWorkoutsPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GenerateWorkoutsPage
        routines={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});