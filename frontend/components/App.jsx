import React from 'react';
import SignUpContainer from './session/signup_container'
import HomePageContainer from './homepage/homepage_container'
import {Route, Switch} from 'react-router-dom'
import SignInContainer from './session/signin_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import FeedContainer from './feed/feed_container';
import BreweriesIndexContainer from './breweries/breweries_index_container'
import HeaderContainer from './header/header_container'

const App = () =>(
    <div>
        <div className = "main-bg">
            <AuthRoute path='/signin' component={SignInContainer} />
            <AuthRoute path='/signup' component={SignUpContainer} />
            <AuthRoute exact path='/' component={HomePageContainer} />
        </div>

        <div className="protected-routes">

            <ProtectedRoute path='/' component={HeaderContainer} />   
            <Switch> 
                <ProtectedRoute path='/feed' component={FeedContainer} />   
                <ProtectedRoute path='/breweries' component={BreweriesIndexContainer} />   
            </Switch>
        </div>

    </div>
);

export default App; 