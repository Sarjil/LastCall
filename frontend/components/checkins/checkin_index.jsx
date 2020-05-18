import React from 'react';

class CheckinsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     this.props.fetchAllCheckins();
    // }

    render(){
        // if(Object.keys(this.props.checkins).length === 0) return null; 
        // const allCheckins = Object.keys(this.props.checkins);

        return(
            <div className="beer-index beer-form-outer">

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

export default CheckinsIndex;   