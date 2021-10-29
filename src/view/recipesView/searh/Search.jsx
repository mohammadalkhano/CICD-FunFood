import * as React from 'react';
import { useContext, useEffect, useState } from 'react'
import {DisplayRecipe} from '../searh/DisplayRecipe'
import {Recipe} from '../recipe/Recipe'
import {ProgressBar} from '../../../components/progressBar/ProgressBar'
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
//TODO: USE PROGRESS INSTEAD FOR GIF IMAGE
import SearchIcon from "@material-ui/icons/Search";
import './Search.css'




export const Search=()=> {
    const value= "Find your recipes";
	const APP_ID = '5ac39ccd'
	const APP_KEY = '36ce344a8e3b488843d7a5a4f3e8b215'
	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('chiken')
	const [loading, setLoading] = useState()

	useEffect(() => {
		getRecipes()
	}, [query])

	useEffect(() => {
		localStorage.setItem("recipes", JSON.stringify(recipes))
	}, [recipes])

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
		const data = await response.json()
		setRecipes(data.hits)
		console.log(data.hits)
	}

	const updateSearch = event => {
		setSearch(event.target.value)
	}

	const getSearch = event => {
		event.preventDefault()
		setQuery(search)
	}

	// const displayData = () => {
	// 	if (!loading) {
	// 		return (
	// 			<div className='recipe'>
	// 				{recipes.map(recipe => (
	// 					<Recipe key={recipe.recipe.label}
	// 						title={recipe.recipe.label}
	// 						cuisineType={recipe.recipe.cuisineType + " cuisine"}
	// 						image={recipe.recipe.image}
	// 						ingredients={recipe.recipe.ingredients}
	// 						url={recipe.recipe.url} />))}
	// 			</div>

	// 		)
	// 	}

	// 	else {
	// 		return <div><ProgressBar/></div>

	// 	}
	//}
  return (
   
		<div className='search-container'>
			<div className='txt-field' >
               <TextField  onChange={updateSearch}
       				id="standard-bare"        
        			variant="filled"
        			label={value}
       				InputProps={{
      					 endAdornment: (
     			 <InputAdornment >
       				 <IconButton  >
        			   <SearchIcon onClick={getSearch} />
       				 </IconButton>
      			 </InputAdornment>
     		 	)}}/>
			 </div>	 	 
		      {/* {displayData()}		 */}
			  <DisplayRecipe recipes= {recipes}/>
	     </div> 
  );
}