import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from '../../util/date_util'

class CheckinShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {checkin: null, toasted: false, currentUserToastId: null }
        this.checkToasted = this.checkToasted.bind(this);
        this.handleToast = this.handleToast.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    checkToasted(checkin) {
        let currentUserToastId = null;
        let toasted = false;

        checkin.toastIds.forEach(id => {
            const toast = this.props.toasts[id];
            if (toast === undefined) return;
            if (toast.userId === this.props.currentUserId) {
                toasted = true;
                currentUserToastId = toast.id;
            }
        });

        this.setState({checkin, toasted, currentUserToastId });
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

    handleDelete() {
        this.props.deleteCheckin(this.state.checkin.id).then(() => this.props.history.push("/thepub"));
    }

    componentDidMount() {
        this.props.fetchCheckin(this.props.match.params.checkinId).then(checkinAction => this.checkToasted(checkinAction.payload.checkin));
    }

    render(){
        let checkin = this.state.checkin; 



    }
}

export default CheckinShow; 