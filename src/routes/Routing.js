import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { AboutView } from '../view/aboutview/AboutView'
import { ContactView } from '../view/contactview/ContactView'
import RoutingPath from './RoutingPath'
import { Footer } from '../components/footer/Footer'


export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.aboutView} component={AboutView} />
                <Route exact path={RoutingPath.contactView} component={ContactView} />
            </Switch>
            <Footer />
        </Router>
    )
}
