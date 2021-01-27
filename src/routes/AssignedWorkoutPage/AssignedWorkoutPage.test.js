import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AssignedWorkoutPage from './AssignedWorkoutPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Route path={`/workout/1`} component={AssignedWorkoutPage} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});