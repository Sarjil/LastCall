import React from 'react';
import SignUpContainer from './session/signup_container'
import Homepage from './homepage'
import {Route} from 'react-router-dom'
import GreetingContainer from './session/greeting/greeting_container';
import Greeting from './session/greeting/greeting'

const App = () =>(
    <div>
        <Homepage />
        {/* <Greeting /> */}
        <Route path='/signup' component={SignUpContainer} />
        {/* <Route path='/' component={GreetingContainer} /> */}

    </div>
);

export default App; 