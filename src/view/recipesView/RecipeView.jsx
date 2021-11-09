
import React from 'react';
import { useEffect, useState } from 'react'
import {DisplayRecipe} from './recipe/DisplayRecipe'
import {ProgressBar} from '../../components/progressBar/ProgressBar'
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import './RecipeStyle.css'

export const RecipeView = () => {
 
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
		setLoading(true);
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
		const data = await response.json()
		setRecipes(data.hits)
		console.log(data.hits)
		setLoading(false);
	}

	const updateSearch = event => {
		setSearch(event.target.value)
	}

	const getSearch = event => {
		event.preventDefault()
		setQuery(search)
	}
	const display=()=>{
		if(!loading){
			return(<DisplayRecipe recipes= {recipes}/>);
		}
		else {
			return (<div><ProgressBar/></div>);
		}
	}
  return (
	
		<div className='search-container'>
			<div className='txt-field'>
               <TextField  onChange={updateSearch}
       				id="standard-bare"        
        			variant="outlined"
					color="success"
        			label={value}
       				InputProps={{
      					 endAdornment: (
     			 <InputAdornment >
       				 <IconButton  >
        			   <SearchIcon className="searchIcon" onClick={getSearch} />
       				 </IconButton>
      			 </InputAdornment>
     		 	)}}/>
			 </div>	 	 
		      {display()}	  
	     </div> 
  );
};

