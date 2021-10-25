import './RecipeStyle.css';
import React from 'react';
import { Search } from './searh/Search';
import Grid from '@material-ui/core/Grid';

export const RecipeView = () => {
 

  return (
    <div className="recipe">
      <Grid container spacing={3} className="search-btn">
           <Grid item xs={12} sm={4}>
               
           </Grid>
      </Grid>
      <Search></Search>
      
    </div>
  );
};

// TODO:
//Design search buttom.
// Display The Data in card Form (Tow or more..).
// Change the backgrund color.
