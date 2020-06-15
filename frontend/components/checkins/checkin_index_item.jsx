import React from "react";
import { Link } from "react-router-dom";
import {formatDate} from '../../util/date_util'
import CommentsContainer from '../comments/comments_container'


export default class CheckinsIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            toasted: false, 
            toastIds: this.props.checkin.toastIds, 
            currentUserToastId: null, 
            commenting: false, 
            comment: ""
        };
        this.handleToast = this.handleToast.bind(this);
        this.checkToasted = this.checkToasted.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            toastIds: checkin.toastIds,
            commentIds: checkin.commentIds || []
        }); 
    }


    handleToast(e) {
        e.preventDefault();
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

    handleCommentClick(e) {
        e.preventDefault();
        if (this.state.commenting) {
            this.setState({ commenting: false });
        } else {
            this.props.fetchCheckin(this.props.checkin.id)
                .then(checkinAction => {
                    this.setState({
                        commenting: true,
                        commentIds: checkinAction.payload.checkin.commentIds
                    });
                });
        }
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        const checkinId = this.props.checkin.id
        const commentData = {
            body: this.state.comment,
            checkin_id: checkinId,
            author_id: this.props.currentUserId
        };

        this.props.createComment(commentData)
            .then(commentAction => this.props.fetchCheckin(commentAction.comment.checkinId))
            .then(checkinAction => this.setState({
                comment: "",
                commentIds: checkinAction.payload.checkin.commentIds
            }));
    }

    handleChange(e) {
        this.setState({ comment: e.target.value });
    }

    handleDelete(commentId) {
        this.props.deleteComment(commentId)
            .then(commentAction => this.props.fetchCheckin(commentAction.comment.checkinId))
            .then(checkinAction => this.setState({ commentIds: checkinAction.payload.checkin.commentIds }));
    }


    componentDidMount() {
        this.checkToasted(this.props.checkin);
    }

    render(){
        
        const checkin = this.props.checkin; 
        const deleteable = checkin.authorId === this.props.currentUserId ?  <p className="orange-link" onClick={() => {
            return this.props.deleteCheckin(checkin.id)
        }}>Delete Check-in</p> : null;

        
        const toasts = this.state.toastIds;
        const totalComments = this.props.checkin.commentIds; 
        let totalPeopleComments = totalComments.length > 1 ? "  comments on this checkin" : " comment on this checkin"
        const peopleComments = totalComments.length === 0 ? null : (
            <section className = "toasts-index">
                <div className = "toast-count">
                    <p className = "toast-item">{totalComments.length}{totalPeopleComments}</p>
                </div>
            </section>

        ); 

            let people = toasts.length > 1 ? " people toasted this checkin" : " person toasted this checkin"
        
        const toastsSection = toasts.length === 0 ? null : (
            <section className="toasts-index">
                <div className="toast-count">
                    <p className="toast-item">{this.state.toastIds.length}{people}</p>
                    <br/>
                    <i className="fas fa-beer toast-item"></i>
                </div>
            </section>
        );

        const buttonClass = this.state.toasted ? "toasted" : "";
        const commentClass = this.state.commenting? "hide-comments" : "show-comments"
        const commentText = this.state.commenting ? "Hide Comments" : "Show Comments";

        const buttons = (
            <section className="checkin-buttons">
                
                <button className={`checkin-button comment-btn ${commentClass}` }onClick={this.handleCommentClick}>
                    <span className="btn-icon">
                        <i className="far fa-comment"></i>
                    </span>{commentText}
                </button>
                
                <button className={`checkin-button ${buttonClass}`} onClick={this.handleToast}>
                    <span className="btn-icon">
                        <i className="fas fa-beer"></i>
                    </span>Toast
                </button>

            </section>
        );

        const commentForm = !this.state.commenting ? null : (
            <form className="new-comment" onSubmit={this.handleCommentSubmit}>

                <textarea
                    className="comment-ta"
                    onChange={this.handleChange}
                    value={this.state.comment}
                    placeholder="Leave a Comment"
                />
                <div className="post-btn-wrap">
                    <button className="checkin-button post-btn">Post</button>
                </div>

            </form>
        );

        const commentsSection = !this.state.commenting ? null : (
            <CommentsContainer
                checkin={checkin}
                deleteComment={this.handleDelete}
            />
        );

        const commentsClass = commentsSection ? "comment-index" : "";

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
                       
                    </div>
                    {buttons}
                    <div className="checkin-bottom">
                        <div className="checkin-bottom-inner">
                            <div className="checkin-info">
                                <p className="date-posted">
                                    {formatDate(checkin.createdAt)}
                                </p>

                                <p className="checkin-show orange-link">
                                    {/* // onClick={(this.handleCommentClick).then(() => this.props.history.push(`/checkins/${checkin.id}`))}> View Detailed Checkin  */}
                                    
                                    {/* {<Link to={`/checkins/${checkin.id}`}>View Detailed Check-in</Link> } */}
                                </p>
                                <div className="checkin-delete">
                                    {deleteable}
                                </div>
                            </div>
                        </div>
                        {toastsSection}
                        {peopleComments}
                        <section className={commentsClass}>
                            {commentsSection}
                            {commentForm}
                        </section>
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
