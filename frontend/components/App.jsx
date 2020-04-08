import React from 'react';
import SignUpContainer from './session/signup_container'
import HomePageContainer from './homepage/homepage_container'
import {Route,} from 'react-router-dom'
import SignInContainer from './session/signin_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import MainContainer from './main/main_container';

const App = () =>(
    <div className = "main-bg">
    
        <AuthRoute path='/signin' component={SignInContainer} />
        <AuthRoute path='/signup' component={SignUpContainer} />
        <AuthRoute exact path='/' component={HomePageContainer} />
        <ProtectedRoute path='/main' component={MainContainer} /> 

    </div>
);

export default App; 