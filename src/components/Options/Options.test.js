import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Options from './Options';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Options />
        </MemoryRouter>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});