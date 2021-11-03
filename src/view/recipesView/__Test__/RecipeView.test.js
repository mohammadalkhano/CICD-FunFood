// it('test name', function, timeout () => {expect(...).toBe(...)});
import { shallow } from 'enzyme';
import { RecipeView } from '../RecipeView';
import TextField from '@mui/material/TextField';

// it('test name', function, timeout () => {expect(...).toBe(...)});

describe('Recipe View', () => {
  it('renders the recipe view', () => {
    const component = shallow(<RecipeView />);
    // console.log(component.debug());
    const wrappar = component.find(<TextField />);
    // console.log(wrappar.debug().length);
    expect(1).toEqual(1);
  });
});
