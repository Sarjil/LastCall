import React from 'react';
import SignUpContainer from './session/signup_container'
import HomePageContainer from './homepage/homepage_container'
import {Route, Switch} from 'react-router-dom'
import SignInContainer from './session/signin_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import CheckinContainer from './checkins/checkin_index_container';
import HeaderContainer from './header/header_container'
import BreweriesIndexContainer from './breweries/breweries_index_container'
import BreweriesShowContainer from './breweries/breweries_show_container'
import BeersIndexContainer from './beers/beer_index_container'
import BeersShowContainer from './beers/beer_show_container'
import AddBeerContainer from './beers/add_beer_container'
import AddBreweryContainer from './breweries/add_brewery_container'
import BeerEditContainer from './beers/beer_edit_container'
import BreweriesBeerContainer from './breweries/breweries_beer_container'
import BreweryEditContainer from './breweries/edit_brewery_container'
import AddCheckinContainer from './checkins/add_checkin_container'
import CheckinShowContainer from './checkins/checkin_show_container'
import Footer from './homepage/footer'

const App = () =>(
    <div className="protected-routes">
        <div className = "main-bg">
            <AuthRoute path='/signin' component={SignInContainer} />
            <AuthRoute path='/signup' component={SignUpContainer} />
            <AuthRoute exact path='/' component={HomePageContainer} />
            {/* <AuthRoute exact path='/' component={Footer} /> */}
        </div>

        <div className="protected-routes">

            <ProtectedRoute path='/' component={HeaderContainer} />   
            <Switch> 
                <ProtectedRoute path='/thepub' component={CheckinContainer} />   
                <ProtectedRoute path='/checkin' component={AddCheckinContainer} />   
                <ProtectedRoute path='/beers/new' component={AddBeerContainer} />   
                <ProtectedRoute path='/breweries/new' component={AddBreweryContainer} />   
                <Route exact path='/breweries/:breweryId' component={BreweriesShowContainer} />   
                <Route exact path='/beers/:beerId/edit' component={BeerEditContainer} />   
                <Route exact path='/breweries/:breweryId/edit' component={BreweryEditContainer} />   
                <Route exact path='/breweries/:breweryId/beers' component={BreweriesBeerContainer} />   
                <Route exact path='/beers/:beerId' component={BeersShowContainer} />   
                <Route exact path='/checkins/:checkinId' component={CheckinShowContainer} />
                <ProtectedRoute path='/breweries' component={BreweriesIndexContainer} />   
                <ProtectedRoute path='/beers' component={BeersIndexContainer} />   
            </Switch>
            <ProtectedRoute path='/' component={Footer} />
        </div>

       

    </div>
);

export default App; 