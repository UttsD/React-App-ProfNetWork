import React from 'react';
import {
  setCurrentPage,
  disableButton,
  getUsers,
  followThunk,
  unFollowThunk
} from '../../actions/users-actions';
import {
  getUsersFromState,
  getPageSize,
  getCurrentPage,
  getDisableFollowButton,
  getTotalUserCount
} from '../../reducers/users-selectors';
import Users from './Users';
import { connect } from 'react-redux';
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
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize);
  }

  changePage = (pageNumber) => {
    const {pageSize} = this.props
    this.props.getUsers(pageNumber, pageSize);
  }
}

// let mapStateToProps = (state) => {
//   return {

//     users: state.users.users,
//     pageSize: state.users.pageSize,
    
//     currentPage: state.users.currentPage,
//     disableFollowButton: state.users.disableFollowButton,
//     totalUserCount: state.users.totalUserCount
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsersFromState(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    disableFollowButton: getDisableFollowButton(state),
    totalUserCount: getTotalUserCount(state)

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

