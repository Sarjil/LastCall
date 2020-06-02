import React from 'react';
import CheckinsIndexItem from './checkin_index_item';
import { Link } from 'react-router-dom'

class CheckinsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllCheckins();
    }

    render(){
        if(Object.keys(this.props.checkins).length === 0) return null; 
        const allCheckins = Object.keys(this.props.checkins);
        // debugger 

        const checkinsLis = allCheckins.map(id => {
            const checkin = this.props.checkins[id];

            return(
                <CheckinsIndexItem
                    key={`${checkin.id}${checkin.body}`}
                    checkin={checkin}
                    toasts={this.props.toasts}
                    fetchCheckin={this.props.fetchCheckin}
                    deleteCheckin={this.props.deleteCheckin}
                    currentUserId={this.props.currentUserId}
               />) 
       }).reverse();
        
       return(
        <div className="beer-index">

            <div className="checkin-index-title">
                <p>  Recent Global Activity </p>
                <Link className="orange-link" to='/checkin'> Create Checkin </Link>
            </div>

            
            <div className="index-body">
                <ul>{checkinsLis}</ul>
            </div>
        </div>
       )
    }
}

export default CheckinsIndex;   