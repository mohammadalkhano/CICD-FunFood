import React from 'react'
import './AboutView.css'
import { useHistory } from 'react-router'
import RoutingPath from '../../routes/RoutingPath'
import foodLogotype from '../../shared/images/foodLogotype.jpg'
import foodLogotype1 from '../../shared/images/foodLogotype1.jpg'
import foodLogotype2 from '../../shared/images/foodLogotype2.jpg'

export const AboutView = () => {

  const hestory = useHistory();
  return (
    <div>
      <h3 className="Rubrik">FunFood är för hemma kockar som behöver lite inspiration, <br />med mat för alla tillfällen.</h3>

      <div class="div">
        <img class="aboutimg" src={foodLogotype} alt={'..error'} />
        <h4 className="sektion1">Välj bland våra receptfavoriter och dela vår
          passion för den godaste maten. Här finns middagstips,
          goda bakverk, mättande mellis och festmenyer.
          Vi har samlat middagstips för så väl jäktiga vardagar
          och de dagar då du vill njuta lite extra av middagen.
          En bra vardagsmiddag går att laga snabbt och enkelt,
          samtidigt som resultatet bjuder på läckra smaker.
          Allt från enkla vardagsrätter till en lyxigare middag
          med passande vin. Alla våra recept är provlagade av våra kockar.
          Var så god, våra middagsrecept!</h4>
      </div>
      <div class="div">
        <img class="aboutimg" src={foodLogotype1} alt={'..error'} />
        <h4 class="h">God mat, helt enkelt. Det ska vara enkelt att laga
          god mat, det har vi alltid tyckt.
          Oavsett om du letar efter tips på en snabb lunchrätt
          eller en festlig finmiddag. Vare sig du är sugen på
          en husmansklassiker eller den senaste trendmaten. Både som
          inspiration till sommarens grillkvällar och en
          vintermiddag med levande ljus. Hos FunFood hittar du
          massor av spännande rätter som passar alla tillfällen.
          Alla provlagade, näringsberäknade och med tydliga beskrivningar
          som gör det enkelt att lyckas i köket.
          Och vi fyller ständigt på med fler. <br />
          Bra recept på god mat, helt enkelt.</h4>
      </div>

      <div class="div">
        <img class="aboutimg" src={foodLogotype2} alt={'..error'} />
        <h4 class="h">FunFood samlar tusentals favoritrecept från
          Medias tidningar tillsammans med helt
          nyutvecklade recept. Har du kycklingfiléer
          i frysen eller mangold i trädgårdslandet?
          Hos FunFood kan du enkelt söka efter recept med
          dina favoritingredienser. Eller fritt söka inspiration bland
          våra tydliga kategorier. Alla våra recept är
          näringsberäknade och visar balansen mellan protein,
          fett och kolhydrater. Och för dig som allergisk
          eller överkänslig finns enkel och tydlig information.
          FunFood fylls kontinuerligt på med många nya
          spännande rätter att prova.</h4>
      </div>
      <div>
        <h4 class="h1">Gå till "Recipies" där du enkelt kan söka på ingrediens eller recept.</h4>
        <button className="button" onClick={() => hestory.push(RoutingPath.recipeView)}>Recipes</button>
        <button className="button" ><a href="#">Jump To Top</a></button>
        <br /><br />
      </div>
    </div>
  )
}