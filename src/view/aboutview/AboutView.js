import React from 'react'
import foodLogotype from '../../shared/images/foodLogotype.jpg'

export const AboutView = () => {
    return (
        <div>
            <h3>A site for home chefs who need a little bit of insperation!</h3>
            <img className= 'FoodLogo' 
                src={foodLogotype} 
                alt={'..error'}/>
        </div>
    )
}
