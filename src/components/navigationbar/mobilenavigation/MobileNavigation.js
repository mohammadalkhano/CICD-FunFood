import React from "react";
import "./MobileNavigation.css";
import { useHistory } from 'react-router-dom'
import LogoType from '../../../shared/images/logotype.png'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MobileNavigationBar() { 
    const history = useHistory()

    return(
       
<div className="navbar-mobile-menu-wrapper">
    <div className="navbar-mobile-logo">
         <img onClick={() => history.push('/')}
                className="LogoType"
                src={LogoType}
                alt="oops" /> 
            <FontAwesomeIcon icon={faBars}/>
    </div>
   
</div>
    )
}

export default MobileNavigationBar;