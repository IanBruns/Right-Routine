import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import OpeningPage from './OpeningPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <OpeningPage />
        </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});