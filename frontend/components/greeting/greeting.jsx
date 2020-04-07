import React from 'react';
import {Link} from 'react-router-dom'

class Greeting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <br/>
                <Link to="/signin">Sign in </Link>
                <br/>
            </>
        )
    }
}

export default Greeting; 

// uncomment once user login works