import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../header/header'

class Feed extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {user,logout} = this.props; 

        return(
            <div>
                <Header user={user} logout={logout}/>
            </div>
        )
    }
}

export default Feed; 