import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App'

const Root = ({store}) =>(
    <Provider store={store}> 
        <h1> Welcome to Last Call! If you enjoy Bud Light, this probably isnt the place for you</h1>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root; 