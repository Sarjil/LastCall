import React from "react";
import { Link } from "react-router-dom";
import {formatDate} from '../../util/date_util'


export default class CheckinsIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { toasted: false, toastIds: this.props.checkin.toastIds, currentUserToastId: null}
        this.handleToast = this.handleToast.bind(this);
        this.checkToasted = this.checkToasted.bind(this);
    }

    checkToasted(checkin) {
        let currentUserToastId = null;
        let toasted = false;
        // debugger
        
            checkin.toastIds.forEach(id => {
                const toast = this.props.toasts[id];
                if (toast === undefined) return;
                if (toast.userId === this.props.currentUserId) {
                    toasted = true;
                    currentUserToastId = toast.id;
                }
            });
        

        this.setState({
            toasted,
            currentUserToastId,
            toastIds: checkin.toastIds
        }); 
    }


    handleToast(e) {
        e.preventDefault();
        // debugger
        const checkToasted = this.checkToasted;
        if (this.state.toasted) {
            this.props.deleteToast(this.state.currentUserToastId)
                .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
                .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
        } else {
            const toastData = {
                user_id: this.props.currentUserId,
                checkin_id: this.props.checkin.id
            };

            this.props.createToast(toastData)
                .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
                .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
        }
    }

    componentDidMount() {
        this.checkToasted(this.props.checkin);
    }

    render(){
        
        const checkin = this.props.checkin; 
        const deleteable = checkin.authorId === this.props.currentUserId ?  <p className="orange-link" onClick={() => {
            return this.props.deleteCheckin(checkins.id)
        }}>Delete Check-in</p> : null;

        
        const toasts = this.state.toastIds;

        let people = toasts.length > 1 ? " people toasted this checkin" : " person toasted this checkin"

        const toastsSection = toasts.length === 0 ? null : (
            <section className="toasts-index">
                <div className="toast-count">
                    <p className="toast-item">{this.state.toastIds.length}{people}</p>
                    <i className="fas fa-beer toast-item"></i>
                </div>
            </section>
        );

        const buttonClass = this.state.toasted ? "toasted" : "";

        const buttons = (
            <section className="checkin-buttons">
                <button className="checkin-button comment-btn"><span className="btn-icon"><i className="far fa-comment"></i></span>Comment</button>
                <button className={`checkin-button ${buttonClass}`} onClick={this.handleToast}><span className="btn-icon"><i className="fas fa-beer"></i></span>Toast</button>
            </section>
        );

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
                    {buttons}
                    <div className="checkin-bottom">
                        <div className="checkin-bottom-inner">
                            <div className="checkin-info">
                                <p className="date-posted">
                                    {formatDate(checkin.createdAt)}
                                </p>

                                <p className="checkin-show orange-link">
                                    <Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link>
                                </p>
                                <div className="checkin-delete">
                                    {deleteable}
                                </div>
                            </div>
                        </div>
                        {toastsSection}
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
