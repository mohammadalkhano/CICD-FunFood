import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/homeview/HomeView';
import { AboutView } from '../view/aboutview/AboutView';
import { ContactView } from '../view/contactview/ContactView';
import { RecipeView } from '../view/recipesView/RecipeView';
import { GalleryView } from '../view/galleryView/GalleryView';

import RoutingPath from './RoutingPath';
import { Footer } from '../components/footer/Footer';

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route exact path={RoutingPath.recipeView} component={RecipeView} />
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.contactView} component={ContactView} />
        <Route exact path={RoutingPath.galleryView} component={GalleryView} />

      </Switch>
      <Footer />
    </Router>
  );
};
