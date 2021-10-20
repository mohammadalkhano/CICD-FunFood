import * as React from 'react';
import { useContext, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {UserContext} from '../../../shared/provider/UserContext'
import {Recipe} from '../recipe/Recipe'
import TextField from '@mui/material/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
//TODO: USE PROGRESS INSTEAD FOR GIF IMAGE
import LoadingImage from '../../../shared/images/LoadingImage.gif'
import SearchIcon from "@material-ui/icons/Search";


export const Search=()=> {
    const value= "Find your recipes";
    const history = useHistory()
	const location = useLocation()
	const APP_ID = '5ac39ccd'
	const APP_KEY = '36ce344a8e3b488843d7a5a4f3e8b215'
	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('chiken')
	const [loading, setLoading] = useState()
	const [serverData, setServerData] = useState()
	const name = useContext(UserContext)

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

	const displayData = () => {
		if (!loading) {
			return (
				<div>
					{recipes.map(recipe => (
						<Recipe key={recipe.recipe.label}
							title={recipe.recipe.label}
							cuisineType={recipe.recipe.cuisineType + " cuisine"}
							image={recipe.recipe.image}
							ingredients={recipe.recipe.ingredients}
							url={recipe.recipe.url} />))}
				</div>

			)
		}

		else {
			return <img src={LoadingImage} alt={'error !'} />

		}
	}
  return (
    <div className="search">
      <TextField onChange={updateSearch}
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
     )}}
     />  {displayData()}
    </div>
    
  );
}