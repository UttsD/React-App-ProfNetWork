import React from 'react';
import {
  setCurrentPage,
  disableButton,
  getUsers,
  followThunk,
  unFollowThunk
} from '../../state/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';




class UsersAPI extends React.Component {

  render() {



    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        totalUserCount={this.props.totalUserCount}
        changePage={this.changePage}
        users={this.props.users}
        disableButton={this.props.disableButton}
        disableFollowButton={this.props.disableFollowButton}
        followThunk={this.props.followThunk}
        unFollowThunk={this.props.unFollowThunk}
      />
    </>
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  changePage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
}

let mapStateToProps = (state) => {
  return {

    users: state.users.users,
    pageSize: state.users.pageSize,
    
    currentPage: state.users.currentPage,
    disableFollowButton: state.users.disableFollowButton,
    totalUserCount: state.users.totalUserCount
  }
}

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  disableButton,
  getUsers,
  followThunk,
  unFollowThunk
})(UsersAPI)


export default UsersContainer;

