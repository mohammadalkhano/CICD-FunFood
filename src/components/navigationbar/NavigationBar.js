import React from 'react'
import MobileNavigation from '../navigationbar/mobilenavigation/MobileNavigation'
import DesktopNavigation from '../navigationbar/desktopNavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import DesktopMobileBreakpoint from "../../shared/global/DesktopMobileBreakpoint"
 

export const NavigationBar = () => {
    const { width } = useWindowDimensions()

    const displayNavigation = () => {
        return width <= DesktopMobileBreakpoint.width ? <MobileNavigation/> : <DesktopNavigation/>
    }
    return (
        <div>
            {displayNavigation()}

        </div>
        
    )
}
