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

        it('should show h4 title', () => {
            const wrapper =shallow(<ContactView />);
            const text =wrapper.find('h4.under_rubrik1');
            const result = text.text();
            expect(result).toBe("För konsumenter");
    
        });
        
        it('should show phone', () => {
            const wrapper =shallow(<ContactView />);
            const text =wrapper.find('h4.phone');
            const result = text.text();
            expect(result).toBe("Telefon 0733** ");
    
        });

        it('should show text1', () => {
            const wrapper =shallow(<ContactView />);
            const text =wrapper.find('h6');
            const result = text.text();
            expect(result).toBe('FunFood Forum hjälper dig genom att svara på frågor kring FunFoods produkter och kampanjer. ');
    
        });
});



