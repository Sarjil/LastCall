import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Nav from '../nav/nav'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>  
                 <div className="homepage-links">
                    <Link className="signin account" to='/signup'> Create An Account!</Link>
                    <Link className="signup account" to='/signin'> Sign In!! </Link> 
                </div>

                <div className="homepage-text">
                    <h1>LAST CALL </h1>
                    <h1>Drink Socially</h1>
                    <h1>Discover and share your favorite beer</h1>
                </div>
            </>
        )
    }
}

export default Homepage;