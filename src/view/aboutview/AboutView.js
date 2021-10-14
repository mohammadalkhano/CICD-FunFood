import React from 'react'
import './AboutView.css'
import foodLogotype from '../../shared/images/foodLogotype.jpg'
import foodLogotype1 from '../../shared/images/foodLogotype1.jpg'
import foodLogotype2 from '../../shared/images/foodLogotype2.jpg'

export const AboutView = () => {
    return (
    <div>
      <h2>Denna sida är för hemma kockar som behöver lite inspiration!</h2>
      <div class="row">
        <div class="column">
          <img src={foodLogotype} alt={'..error'}/>
        </div>
        <div class="column">
          <img src={foodLogotype1} alt={'..error'}/>
        </div>
        <div class="column">
          <img src={foodLogotype2} alt={'..error'}/>
        </div>
        <h3>Enkla, snabba och festliga recept. Allt från festmat till pannkakor, kladdkaka och vegetarisk mat.</h3>
        <h4>Gå till Search där du enkelt anger de ingredienser du har hemma 
        med resultat av flertal olika lätt lagade och goda recept.</h4>
      </div>
    </div>
    )
}
