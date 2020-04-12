import React from 'react';
import { connect } from 'react-redux';
import { getUserData, getUserStatus, updateStatus, savePhoto, saveProfile} from '../../actions/profile-actions'
import Profile from './Profile';
import {withRouter} from "react-router-dom"
import {compose } from 'redux'
import {witsAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            
            userId = this.props.myId
            
           
        }
        this.props.getUserData(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        
        return  <Profile {...this.props} 
        isOwner = {! this.props.match.params.userID }
        profile = {this.props.profile} status = {this.props.status} 
        updateStatus = {this.props.updateStatus}
        savePhoto ={this.props.savePhoto}/>
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prefProps, prevState, snapshot) {
        if (this.props.match.params.userID != prefProps.match.params.userID)
        this.refreshProfile();
    }
};

let mapStateToProps = (state) => ({    
    profile: state.profile.profile,
    status: state.profile.status,
    myId: state.auth.userID,
    isAuth: state.auth.isAuth

});



export default compose(
    connect(mapStateToProps, { getUserData, getUserStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    witsAuthRedirect 
)(ProfileContainer)