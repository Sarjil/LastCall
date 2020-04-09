import React from 'react';
import SignUpContainer from './session/signup_container'
import HomePageContainer from './homepage/homepage_container'
import {Route, Switch} from 'react-router-dom'
import SignInContainer from './session/signin_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import FeedContainer from './feed/feed_container';

const App = () =>(
    <div>
        <div className = "main-bg">
            <AuthRoute path='/signin' component={SignInContainer} />
            <AuthRoute path='/signup' component={SignUpContainer} />
            <AuthRoute exact path='/' component={HomePageContainer} />
        </div>
            <ProtectedRoute path='/feed' component={FeedContainer} />   
    </div>
);

export default App; 