import React from 'react';
import {Recipe} from '../recipe/Recipe'

export const DisplayRecipe=({recipes})=> {

    const displayData = () => {
		
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
    return (
        <div>
          {displayData()}
        </div>
    )
}
