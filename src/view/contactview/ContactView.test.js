import React from 'react';
import ReactDOM from 'react-dom';
import './ContactView.js'
import ContactView from './ContactView.js'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContactView />, div);
    console.log('true')
    ReactDOM.unmountComponentAtNode(div);
});