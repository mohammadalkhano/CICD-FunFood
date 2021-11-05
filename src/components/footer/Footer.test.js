import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './Footer'
import  {Enzyme, shallow} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

 
describe('Footer', () => {

    it('should show text', () => {
        const wrapper = shallow(<Footer />);
        const text =wrapper.find('p');
        const result = text.text();
        expect(result).toBe('Allrecipes is part of the FunFood Group. Copyright 2021 FunFood. All Rights Reserved.');
    });

});