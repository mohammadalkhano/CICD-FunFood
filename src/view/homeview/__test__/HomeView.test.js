   
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import HomeView from '../HomeView'

Enzyme.configure({adapter: new Adapter()});

describe('HomeView', () => {
    it('should show text', () => {
        const wrapper =shallow(<HomeView />);
        const text =wrapper.find('h1');
        const result = text.text();
        expect(result).toBe('Welcome to FunFood !');

    });

    it('should show para texta', () => {
        const wrapper =shallow(<HomeView />);
        const text =wrapper.find('div p');
        const result = text.text();
        expect(result).toBe('Dear User, kindly visit our Recipes Page to have a look at some of the best recipes from across the world. Please contact us with your valuable feedback to help us improve.');

    });
});

