import React from 'react'
import './DesktopNavigation.css'
import { useHistory } from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.png'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
   
    const history = useHistory()

    return (
        <div className="NavigationBarWrapper">
            <img onClick={() => history.push(RoutingPath.homeView)} className="LogoType" src={LogoType} alt="FunFood" />
                    <span className="navbar-disktop-item-1" onClick={() => history.push(RoutingPath.homeView)} >Home</span>
                    <span className="navbar-disktop-item-2" onClick={() => history.push(RoutingPath.recipeView)} >Recipes</span>
                    <span className="navbar-disktop-item-3" onClick={() => history.push(RoutingPath.contactView)} >Contact</span>
                    <span className="navbar-disktop-item-4" onClick={() => history.push(RoutingPath.aboutView)} >About</span>
                    

        </div>
    )
}
export default DesktopNavigation;