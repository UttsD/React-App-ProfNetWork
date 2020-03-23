import React from 'react';
import { connect } from 'react-redux';
import { getUserData, getUserStatus, updateStatus} from '../../state/profile-reducer'
import Profile from './Profile';
import {withRouter} from "react-router-dom"
import {compose } from 'redux'
import {witsAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
    
    render() {
        
        return  <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
    }

    componentDidMount() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = 5770
        }
        this.props.getUserData(userId);
        this.props.getUserStatus(userId);

    }
};

let mapStateToProps = (state) => ({    
    profile: state.profile.profile,
    status: state.profile.status
});



export default compose(
    connect(mapStateToProps, { getUserData, getUserStatus, updateStatus}),
    withRouter,
    witsAuthRedirect 
)(ProfileContainer)