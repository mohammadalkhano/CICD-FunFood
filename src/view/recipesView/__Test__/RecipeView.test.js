
// it('test name', function, timeout () => {expect(...).toBe(...)});

import { RecipeView } from '../RecipeView';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
// it('test name', function, timeout () => {expect(...).toBe(...)});


describe('Recipe View', () => {
  it('renders the text fileds count', () => {
    const component = shallow(<RecipeView />);

    const wrapper = component.find('ForwardRef(TextField)');
    const result = wrapper.exists();
    console.log(result);
    expect(result).toBeTruthy();
  });
  // it('simulates the search icon onClick', () => {
  //   const component = shallow(<RecipeView />);
  //   const wrapper = component.find('');
  //   const result = wrapper.exists();
  //   console.log(result);
  //   expect(result).toBeTruthy();
  // });
});
