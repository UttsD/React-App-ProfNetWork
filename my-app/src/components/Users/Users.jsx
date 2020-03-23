import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';



let Users = (props) => {
 
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  return <div >
    <div>

      {pages.map(p => { 
        return <span className={props.currentPage === p && styles.selected}
          onClick={(e) => { props.changePage(p) }}>{p}</span>
      })}

    </div>
    <div className={styles.professionals}>
      {

        props.users.map(el =>

          <div className={styles.provessional}>
            <div className={styles.prof_photo}>
            <NavLink to={"/profile/" + el.id}>
              <img src={el.photos.small != null ? el.photos.small : "https://tattoo.tattooawards.com/uploads/0622de3fa1b292e57a795dbd9597fd41/90433/570x525_5d0b99866b9fe.jpg"} alt=""></img>
              </NavLink>
            </div>
            <div className={styles.prof_info}>
              <h6>{el.name}
                <span className={styles.profession}>{el.status != null || "" ? el.status : "Frontend Web Developer"}</span></h6>

              <p><i className="fa fa-map-marker">USA, Florida</i></p>

              <div className={styles.follow_buttons}>

                {el.followed ? <button disabled = {props.disableFollowButton.some(id => id === el.id)} className={styles.unfollow_btn} onClick={() => { 
                props.unFollowThunk(el.id);  
                }}>Unfollow Professional</button> : 
                <button disabled = {props.disableFollowButton.some(id => id === el.id)} className={styles.follow_btn} onClick={() => { 
                  props.followThunk(el.id);
                }}
                  >Follow Professional</button>}
              </div>
            </div>
          </div>


        )
      }</div></div>


}






export default Users;