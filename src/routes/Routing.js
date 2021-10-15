import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/homeview/HomeView';
import { RecipeView } from '../view/recipesView/RecipeView';
import { AboutView } from '../view/aboutview/AboutView';
import { ContactView } from '../view/contactview/ContactView';

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/Home" component={HomeView} />
        <Route exact path="/Recipes" component={RecipeView} />
        <Route exact path="/About" component={AboutView} />
        <Route exact path="/Contact" component={ContactView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
