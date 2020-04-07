import React from 'react';
import { Link } from 'react-router-dom'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1> Welcome to Last Call! If you enjoy Bud Light, this probably isnt the place for you</h1>
                <Link to='/signup'> Sign Up!! </Link>
            </>
        )
    }
}
export default Homepage;
