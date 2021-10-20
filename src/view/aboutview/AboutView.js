import React from 'react'
import './AboutView.css'
import foodLogotype from '../../shared/images/foodLogotype.jpg'
import foodLogotype1 from '../../shared/images/foodLogotype1.jpg'
import foodLogotype2 from '../../shared/images/foodLogotype2.jpg'

export const AboutView = () => {
    return (
    <div>
      <h3>FunFood är för hemma kockar som behöver lite inspiration, <br/>
        med mat för alla tillfällen.</h3>

          <img  class="img1" src={foodLogotype} alt={'..error'}/>

      <div class="div1">
      <h4 class="h41">Vi har samlat middagstips för så väl jäktiga vardagar <br/>
                      och de dagar då du vill njuta lite extra av middagen. <br/>
                      En bra vardagsmiddag går att laga snabbt och enkelt, <br/>
                      samtidigt som resultatet bjuder på läckra smaker. <br/>
                      Var så god, våra middagsrecept!</h4>
      </div>

          <img  class="img2" src={foodLogotype1} alt={'..error'}/>

      <div class="div2">
        <h4 class="h42">God mat, helt enkelt. Det ska vara enkelt att laga  <br/>
                        god mat, det har vi alltid tyckt. <br/>
                        Oavsett om du letar efter tips på en snabb lunchrätt  <br/>
                        eller en festlig finmiddag. Vare sig du är sugen på  <br/>
                        en husmansklassiker eller den senaste trendmaten. Både som  <br/>
                        inspiration till sommarens grillkvällar och en  <br/>
                        vintermiddag med levande ljus. Hos FunFood hittar du  <br/>
                        massor av spännande rätter som passar alla tillfällen. <br/>
                        Alla provlagade, näringsberäknade och med tydliga beskrivningar <br/>
                        som gör det enkelt att lyckas i köket. Och vi fyller  <br/>
                        ständigt på med fler. <br/>
                        Bra recept på god mat, helt enkelt.</h4>
      </div>

          <img class="img3" src={foodLogotype2} alt={'..error'}/>

      <div class="div3">
      <h4 class="h43">FunFood samlar tusentals favoritrecept från  <br/>
                      Aller Medias tidningar tillsammans med helt  <br/>
                      nyutvecklade recept. Har du kycklingfiléer <br/>
                      i frysen eller mangold i trädgårdslandet?  <br/>
                      Hos FunFood kan du enkelt söka efter recept med  <br/>
                      dina favoritingredienser. Eller fritt söka inspiration bland <br/>
                      våra tydliga kategorier. Alla våra recept är  <br/>
                      näringsberäknade och visar balansen mellan protein,  <br/>
                      fett och kolhydrater. Och för dig som allergisk <br/>
                      eller överkänslig finns enkel och tydlig information. <br/>
                      FunFood fylls kontinuerligt på med många nya spännande  <br/>
                      rätter att prova.</h4> 
      </div>

      <h4 class="h44">Gå till "Recipies" där du enkelt kan söka på 
          ingrediens eller recept.</h4>
          
          <a class="jump-to-top" href="#">Jump To Top</a>
    </div>

    )
}
