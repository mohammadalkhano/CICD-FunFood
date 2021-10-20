//import './RecipeStyle.css';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import LoadingImage from '../../shared/images/LoadingImage.gif';
import UserContext from '../../shared/provider/UserContext';
import { Search } from './searh/Search';
import Grid from '@material-ui/core/Grid';

export const RecipeView = ({ title, image, ingredients, url }) => {
  const [value,setValue]= useState("Find your recipes");
  const history = useHistory();
  const location = useLocation();
  const APP_ID = '5ac39ccd';
  const APP_KEY = '36ce344a8e3b488843d7a5a4f3e8b215';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chiken');
  const [loading, setLoading] = useState();
  const [serverData, setServerData] = useState();
  const name = useContext(UserContext);
  

  useEffect(() => {
    getRecipes();
  }, [query]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  };

  const displayData = () => {
    if (!loading) {
      return (
        <div className="recipes1">
          {recipes.map((recipe) => (
            <RecipeView
              
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
              
            />
          ))}
        </div>
      );
    } else {
      return <img src={LoadingImage} alt={'error !'} />;
    }
  };
  

  return (
    <div className="recipes">
      <Grid item className="search-btn">
        <Search></Search>
      </Grid>





      {/* <Grid container> */}
      <Grid item className="item1">
        {/* { <Recipe></Recipe> } */}
      </Grid>






      <Grid item className="item2">
        {/* <Recipe /> */}
      </Grid>
      {/* </Grid> */}
      
    </div>
  );
};

// TODO:
//Design search buttom.
// Display The Data in card Form (Tow or more..).
// Change the backgrund color.
