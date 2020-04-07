import React from 'react';
import { Link,Redirect } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
             <Link to='/signup'> Sign Up!! </Link>   
             <Link to='/signin'> Sign In!! </Link>   
                           
            </>
        )
    }
}
export default Homepage;
