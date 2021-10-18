import React from 'react'
import MobileNavigation from '../navigationbar/mobilenavigation/MobileNavigation'
import DesktopNavigation from '../navigationbar/desktopNavigation/DesktopNavigation'
    
export const NavigationBar = () => {

    return(
        <span className="MobNav">
            
            <MobileNavigation/>
            <DesktopNavigation/>

        </span>
    )
   }