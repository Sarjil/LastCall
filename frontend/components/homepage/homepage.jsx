import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Search from './search'
import Map from './map'
import Features from './features'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage-cont">

                <div className="homepage-first-sect">  

                    <div className="homepage-links">
                        <Link className="signup account" to='/signin'> Sign In </Link> 
                        <Link className="signin account" to='/signup'> Create An Account</Link>
                    </div>
                
                    <div className="homepage-imgs"> 
                        <img className ="lastcall-logo" src={window.lastcalllogo}/>
                        <img className="masthead-img" src={window.mastheadUrl} />
                    </div>

                    <div className="homepage-text">
                        <h1 className="home-h1-first" >Discover and share your</h1> 
                        <h1 className="home-h1-second" >favorite beer</h1>
                    </div>

                </div>

                <Search />
                <Map />
                <Features />
            </div>
        )
    }
}

export default Homepage;