import React from 'react';
import ReactDOM from 'react-dom';
import ContactView from '../ContactView'
import  {Enzyme, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


//Enzyme.configure({adapter: new Adapter()});

 
describe('ContactView', () => {
  

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ContactView />, div);
        console.log('false')
        ReactDOM.unmountComponentAtNode(div);
    });
});



