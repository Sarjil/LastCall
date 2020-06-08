import React from "react";
import CommmentsIndexItem from "./comments_index_item";

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.checkin.id) return null;

        const commentIds = this.props.checkin.commentIds;

        if (commentIds.length === 0) {
            return null;
        }

        const comments = this.props.comments;

        const commentList = commentIds.map(id => {
            const comment = comments[id];
            if (!comment) return;

            return (
                <CommmentsIndexItem
                    key={`${comment.id}${comment.body}`}
                    comment={comment}
                    currentUserId={this.props.currentUserId}
                    updateComment={this.props.updateComment}
                    deleteComment={this.props.deleteComment}
                />
            )
        })

        return (
            <ul className="comments-list">
                {commentList}
            </ul>
        );
    }
}

export default CommentsIndex;