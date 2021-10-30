import { React, useState } from "react";
import "./MobileNavigation.css";
import { useHistory } from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoutingPath from '../../../routes/RoutingPath'


function MobileNavigationBar() {
    const [menuIcon, setMenuIcon] = useState(faBars)
    const [blurredBackground, setBlurredBackground] = useState('')
    const history = useHistory()

    const linkNavigation = (routingPath) => {
        setMenuIcon(faBars)
        setBlurredBackground('')
        history.push(routingPath)
    }

    const menuIconDisplay = () => {
        if (menuIcon === faBars) {
            setMenuIcon(faTimes)
            setBlurredBackground(`navbar-mobile-blurry-background`)
        } else {
            setMenuIcon(faBars)
            setBlurredBackground('')
        }
    }
    const displayNavigationMenu = () => {
        return (menuIcon === faTimes)
            ? (<nav className="navbar-mobile-menu-wrapper">
                <div className="navbar-mobile-menu">
                    <span className="navbar-mobile-item-1" onClick={() => linkNavigation(RoutingPath.homeView)} >Home</span>
                    <span className="navbar-mobile-item-2" onClick={() => linkNavigation(RoutingPath.recipeView)} >Recipes</span>
                    <span className="navbar-mobile-item-3" onClick={() => linkNavigation(RoutingPath.contactView)} >Contact</span>
                    <span className="navbar-mobile-item-4" onClick={() => linkNavigation(RoutingPath.aboutView)} >About</span>
                </div>
            </nav>)
            : (<></>)
    }

    return (

        <div className="navbar-mobile-menu-wrapper">
            <div className="navbar-mobile-logo">
                <img src={LogoType} alt="Fun Food" onClick={() => history.push(RoutingPath.homeView)} className="LogoType" />
                <div className="navbar-mobile-burger-icon">
                    <FontAwesomeIcon icon={menuIcon} onClick={() => menuIconDisplay()} />
                </div>
                <div className={blurredBackground} onClick={() => menuIconDisplay()}></div>
                <div className="navbar-mobile-burger-menu">
                    {displayNavigationMenu()}
                </div>
            </div>

        </div>
    )
}

export default MobileNavigationBar;