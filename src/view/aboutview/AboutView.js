import React from 'react'
import './AboutView.css'
import foodLogotype from '../../shared/images/foodLogotype.jpg'
import foodLogotype1 from '../../shared/images/foodLogotype1.jpg'
import foodLogotype2 from '../../shared/images/foodLogotype2.jpg'

export const AboutView = () => {
    return (
    <div>
      <h3>Denna sida är för hemma kockar som behöver lite inspiration, 
        med mat för alla tillfällen.</h3>
      <h4>Vi har samlat middagstips för så väl jäktiga vardagar och 
        de dagar då du vill njuta lite extra av middagen. 
        En bra vardagsmiddag går att laga snabbt och enkelt, 
        samtidigt som resultatet bjuder på läckra smaker. 
        Var så god, våra middagsrecept!</h4>
      <div class="row">
        <div class="column">
          <img class="img" src={foodLogotype} alt={'..error'}/>
        </div>
        <div class="column">
          <img class="img" src={foodLogotype1} alt={'..error'}/>
        </div>
        <div class="column">
          <img class="img" src={foodLogotype2} alt={'..error'}/>
        </div>
        <h4>Gå till "Search" där du enkelt kan söka på 
          ingrediens eller recept.</h4>
      </div>
    </div>
    )
}
