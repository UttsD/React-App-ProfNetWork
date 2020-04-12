import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginators from '../common/Paginator/Paginations';
import User from './User';



let Users = (props) => {
 
  return <div >
    <Paginators totalItemsCount = {props.totalUserCount} pageSize ={props.pageSize} currentPage= {props.currentPage} changePage = {props.changePage} />

    <div className={styles.professionals}>
      {

        props.users.map(user => <User user = {user} disableFollowButton = {props.disableFollowButton} unfollow = {props.unFollowThunk} follow = {props.followThunk}  key = {user.id} /> )
      }</div></div>


}






export default Users;