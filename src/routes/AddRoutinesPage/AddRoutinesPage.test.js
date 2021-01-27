import React from 'react';
import ReactDOM from 'react-dom';
import AddRoutinesPage from './AddRoutinesPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddRoutinesPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});