import React from 'react';
import {Link} from 'react-router-dom'

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {user,logout} = this.props; 

        return(
            <div>
                <h1> Welcome {user.username}, to Last Call </h1>
                <button className="logout-account" type="submit" onClick={logout}>Log Out</button>
                
            </div>
        )
    }
}

export default Main; 