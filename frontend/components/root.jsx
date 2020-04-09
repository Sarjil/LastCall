import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './App'
import Search from './homepage/search'

const Root = ({store}) =>(
    <Provider store={store}> 
        <HashRouter>
            <App />
            <Search />
        </HashRouter>
    </Provider>
);

export default Root; 