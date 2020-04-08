import React from 'react';
import SignUpContainer from './session/signup_container'
import HomePageContainer from './homepage/homepage_container'
import {Route} from 'react-router-dom'
import SignInContainer from './session/signin_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () =>(
    <div className = "main-bg">
        
        <Route path = '/' component={HomePageContainer} />
        <AuthRoute path='/signin' component={SignInContainer} />
        <AuthRoute path='/signup' component={SignUpContainer} />

    </div>
);

export default App; 