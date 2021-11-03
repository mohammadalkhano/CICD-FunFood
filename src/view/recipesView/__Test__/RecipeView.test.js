// it('test name', function, timeout () => {expect(...).toBe(...)});
import react from 'react';
import { shallow, mount } from 'enzyme';
import { RecipeView } from '../RecipeView';
import TextField from '@mui/material/TextField';

// it('test name', function, timeout () => {expect(...).toBe(...)});

describe('Recipe View', () => {
  it('renders the recipe view', () => {
    const component = shallow(<RecipeView />);
    console.log(component.debug());
    const wrappar = component.find(<TextField />);
    console.log(wrappar.debug().length);
    expect(wrappar.length).toEqual(1);
  });
});
