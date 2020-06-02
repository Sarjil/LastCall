import React from "react";
import { Link } from "react-router-dom";


export default class CheckinsIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        const checkin = this.props.checkin; 
        const deleteable = checkin.authorId === this.props.currentUserId ?  <p className="orange-link" onClick={() => {
            return this.props.deleteCheckin(checkins.id)
        }}>Delete Check-in</p> : null;


        return (
            <div className="outer-checkin-item">
                <div className="beer-pic-container"></div>

                <div className="checkin-main">
                    <div className="upper-checkin-content">
                        <div className="upper-main">
                            <p className="checkin-text">
                                {checkin.authorName} is drinking a
                                 <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`} className="orange-link"> {checkin.beerName}</Link> by
                                 <Link to={`/breweries/${checkin.breweryId}`} className="orange-link"> {checkin.breweryName}</Link>
                            </p>
                        </div>
                    </div>

                    <div className="checkin-rating-body">
                        <div className="checkin-body-index">{checkin.body}</div>
                        <div className="checkin-rating">
                            {/* {displayStars(checkin.rating)} */}
                        </div>
                    </div>
                    {/* {buttons} */}
                    <div className="checkin-bottom">
                        <div className="checkin-bottom-inner">
                            <div className="checkin-info">
                                <p className="date-posted">
                                    {/* {formatDate(checkin.createdAt)} */}
                                </p>

                                <p className="checkin-show orange-link">
                                    <Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link>
                                </p>
                                <div className="checkin-delete">
                                    {deleteable}
                                </div>
                            </div>
                        </div>
                        {/* {toastsSection} */}
                    </div>
                </div>

                <div className="beer-pic-container">
                    <Link to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>
                        <img src={checkin.beerImgUrl} className="checkin-beer-pic" />
                    </Link>
                </div> </div>
        )
    }
}
