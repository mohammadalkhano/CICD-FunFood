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
    
  });
});
