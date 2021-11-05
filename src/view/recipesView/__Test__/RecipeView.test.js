import { shallow } from 'enzyme';
import { RecipeView } from '../RecipeView';
import TextField from '@mui/material/TextField';


describe('Recipe View', () => {
  it('renders the recipe view', () => {
    const component = shallow(<RecipeView />);
    const wrappar = component.find(<TextField />);
    expect(1).toEqual(1);
  });
});
