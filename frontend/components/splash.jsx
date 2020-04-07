import React from 'react';
import { Link,Redirect } from 'react-router-dom'

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
             <h1> LAST CALL! {this.props.user}</h1>
             <p> Drink Socially </p>
             <p>Discover and Share Your Favorite Beer</p>
             
             <Link to='/signup'> Sign Up!! </Link>
             <br/>   
             <Link to='/signin'> Sign In!! </Link>   
             <br/>         
                         
                     
             
            </>
        )
    }
}
export default Splash;
