import React,{useState} from 'react';
import {Recipe} from '../recipe/Recipe'
import {ProgressBar} from '../../../components/progressBar/ProgressBar'

export const DisplayRecipe=({recipes})=> {
	const [loading, setLoading] = useState();
    //const [recipes, setRecipes] = useState();

    const displayData = () => {
		if (!loading) {
			return (
				<div className='recipe'>
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
			return <div><ProgressBar/></div>

		}
	}
    return (
        <div>
          {displayData()}
        </div>
    )
}
