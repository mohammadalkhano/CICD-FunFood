import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { App } from '../../App';
import { createMemoryHistory } from 'history';
import { RecipeView } from '../recipesView/RecipeView';
import { DisplayRecipe } from '../recipesView/recipe/DisplayRecipe';
import { DesktopNavigation } from '../../components/navigationbar/desktopNavigation/DesktopNavigation';

import { Enzyme, mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('views integration', () => {
  jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

  test('testing app, navigationbar and recipe', async () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <DesktopNavigation />
      </Router>
    );

    const item = screen.getByText('Recipes');
    //console.log(item);
    expect(item).toBeInTheDocument();
    userEvent.click(item);
    expect(history.location.pathname).toBe('/recipe');
    
    

    const item1 = screen.getByText('About');
    expect(item1).toBeInTheDocument();
    userEvent.click(item1);
    expect(history.location.pathname).toBe('/about');
    //console.log(item1);



    // const mockChange = jest.fn();
    // let wrapper = mount(<RecipeView></RecipeView>);
    // const result = wrapper.find('.standard-bare');
    // console.log(result.debug);
    // result.simulate('change').find('.standard-bare');
    // expect(mockChange.mock.calls).lastCalledWith('chiken');




    // console.log(wrapper.debug);

    //expect(history.length).toBe(2);
    //expect(history.location.pathname).toBe('/about');
    //   wrapper.find().simulate();
    //   console.log(wrapper.debug);
    //expect(screen.getByText(/you are home/i)).toBeInTheDocument()
    //expect(wrapper.getElements.name('some fake name')).toBeInTheDocument();
  });
});
