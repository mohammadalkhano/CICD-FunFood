import React from 'react';
import ReactDOM from 'react-dom';
import './ContactView.js'
import ContactView from './ContactView.js'
import  {Enzyme, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter()});

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ContactView />, div);
    console.log('false')
    ReactDOM.unmountComponentAtNode(div);
});

describe('ContactView', () => {
     it('should show text', () => {
         const wrapper =shallow(<ContactView />);
         const text =wrapper.find(' div h4');
         expect(text.text()).toBe('För konsumenter');
     });
    
     describe('ContactView', () => {
        it('should show text', () => {
            const wrapper =shallow(<ContactView />);
            const text =wrapper.find('div h4');
            expect(text.text()).toBe('funfood93@gmail.com ');
        });
    });

})