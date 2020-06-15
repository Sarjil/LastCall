import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from '../../util/date_util'
import CommentsContainer from '../../components/comments/comments_container'

class CheckinShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {checkin: this.props.checkin, toasted: false, currentUserToastId: null, comment:""}
        this.handleCommentDelete = this.handleCommentDelete.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.checkToasted = this.checkToasted.bind(this);
        this.handleToast = this.handleToast.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleCommentDelete(commentId) {
        this.props.deleteComment(commentId)
            .then(commentAction => {
                return this.props.fetchCheckin(commentAction.comment.checkinId)
            })
            .then(checkinAction => {
                return this.setState({ checkin: checkinAction.payload.checkin })
            });
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        const checkinId = this.state.checkin.id
        const commentData = {
            body: this.state.comment,
            checkin_id: checkinId,
            author_id: this.props.currentUserId
        };

        this.props.createComment(commentData)
            .then(commentAction => this.props.fetchCheckin(commentAction.comment.checkinId))
            .then(checkinAction => this.setState({
                comment: "",
                checkin: checkinAction.payload.checkin
            }));
    }

    checkToasted(checkin) {
        let currentUserToastId = null;
        let toasted = false;

        checkin.toastIds.forEach(id => {
            const toast = this.props.toasts[id];
            if (toast === undefined) return;

            if (toast.userId === this.props.currentUserId) {
                currentUserToastId = toast.id;
                toasted = true;
            }
        });

        this.setState({checkin, toasted, currentUserToastId, commentIds: checkin.commentIds||[] });
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
                checkin_id: this.state.checkin.id
            };

            this.props.createToast(toastData)
                .then((toastAction) => this.props.fetchCheckin(toastAction.toast.checkinId))
                .then((checkinAction) => checkToasted(checkinAction.payload.checkin));
        }
    }

    handleChange(e) {
        this.setState({ comment: e.target.value });
    }

    handleDelete() {
        this.props.deleteCheckin(this.state.checkin.id).then(() => this.props.history.push("/thepub"));
    }

    componentDidMount() {
        this.props.fetchCheckin(this.props.match.params.checkinId)
        .then(checkinAction => this.checkToasted(checkinAction.payload.checkin));
        
    }


    render(){
        let checkin = this.state.checkin; 
        if (checkin.id === undefined) return null; 
        let deletable; 
        
        if((Object.values(checkin)).length > 0){
            deletable = checkin.authorId === this.props.currentUserId ? 
            <p className="orange-link checkin-show-delete" onClick={this.handleDelete}> Delete Check-in </p> : null; 
            
        }

        let buttonClass = this.state.toasted ? "toasted" : ""; 

        const toastsSection = (
            <section className="toasts-show">
                <button className={`checkin-show-button ${buttonClass}`} onClick={this.handleToast}>
                    <span className="btn-icon"><i className="toast-item"></i></span>
                    <p>Toast</p>
                </button>
                <div className="toast-count-show">
                    <p className="toast-item">{checkin.toastIds.length}</p>
                </div>
            </section>
        );

        return(
            <div className="checkin-show-container">
                <div className="checkin-show-main">
                    <div className="inner-checkin-show">
                        <div className="orange-link return"><Link to="/thepub">Return back to The Pub.</Link></div>
                        <section className="checkin-show-info">
                            <div className="checkin-show-top">
                                <p className="checkin-author-name">{checkin.authorName}</p>
                            </div>

                            <div className="checkin-show-mid">
                                <div className="upper-mid">
                                    <img className="checkin-show-pic" src={checkin.beerImgUrl} />
                                    <div className="checkin-beer-info">
                                        <p className="checkin-beer-name"><Link className="black-link" to={`/breweries/${checkin.breweryId}/beers/${checkin.beerId}`}>{checkin.beerName}</Link></p>
                                        <p className="checkin-brewery-name" ><Link className="black-link" to={`/breweries/${checkin.breweryId}`}>{checkin.breweryName}</Link></p>
                                    </div>
                                </div>
                                <div className="checkin-body-show">{checkin.body}</div>
                            </div>

                            <div className="checkin-show-bottom">
                                <p className="checkin-show-date">{formatDate(checkin.createdAt)}</p>
                                {deletable}
                            </div>
                        </section>
                    </div>

                    <div className="checkin-show-socials">
                        {toastsSection}
                    </div>
                    <div className="checkin-show-socials comment-index-show">
                        <div className="comment-wrap">
                            <CommentsContainer
                                checkin={checkin}
                                deleteComment={this.handleCommentDelete}
                            />
                        </div>
                        <form className="comments-form" onSubmit={this.handleCommentSubmit}>

                            <textarea
                                className="comment-ta-show"
                                onChange={this.handleChange}
                                value={this.state.comment}
                                placeholder="Leave a Comment.."
                            />
                            <div className="post-btn-wrap">
                                <button className="checkin-button post-btn post-btn-show">Post</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
            
        
        

    }
}

export default CheckinShow; 