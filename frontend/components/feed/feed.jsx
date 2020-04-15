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
            <div className="beer-index">

                <div className="beer-index-title"> FEED GOES HERE.....eventually </div>
                <div className="beer-indx-body">
                    <p> BEERLOVER.USERNAME DRANK AN AWESOME BEER ON THIS DATE</p>
                    <span> CLICK HERE TO</span> <a href="">"TOAST"</a>  
                    <p></p>
                    <span> CLICK HERE TO</span> <a href=""> "COMMENT"</a>
                </div>
            </div>
        )
    }
}

export default Feed;   