import React from 'react';
import SignUpContainer from './session/signup_container'
import Homepage from './homepage'
import {Route} from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import Greeting from './greeting/greeting'
import SignInContainer from './session/signin_container'
import {AuthRoute} from '../util/route_util'

const App = () =>(
    <div>
        {/* <Homepage /> */}
        {/* <Greeting /> */}
        <Route path='/signup' component={SignUpContainer} />
        <Route path='/' component={Homepage} />
        <Route path='/signin' component={SignInContainer} />

    </div>
);

export default App; 