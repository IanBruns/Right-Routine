import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ManageRoutinesExercisesPage from './ManageRoutinesExercisesPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Route path={`/workout/1`} component={ManageRoutinesExercisesPage} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});