import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';



let User = ({user, disableFollowButton, unfollow, follow}) => {
 
  return(
          <div className={styles.provessional}>
            <div className={styles.prof_photo}>
            <NavLink to={"/profile/" + user.id}>
              <img src={user.photos.small != null ? user.photos.small : "https://tattoo.tattooawards.com/uploads/0622de3fa1b292e57a795dbd9597fd41/90433/570x525_5d0b99866b9fe.jpg"} alt=""></img>
              </NavLink>
            </div>
            <div className={styles.prof_info}>
              <h6>{user.name}
                <span className={styles.profession}>{user.status   != null || "" ? user.status : "Frontend Web Devuseroper"}</span></h6>

              <p><i className="fa fa-map-marker">USA, Florida</i></p>

              <div className={styles.follow_buttons}>

                {user.followed ? <button disabled = {disableFollowButton.some(id => id === user.id)} className={styles.unfollow_btn} onClick={() => { 
                unfollow(user.id);  
                }}>Unfollow Professional</button> : 
                <button disabled = {disableFollowButton.some(id => id === user.id)} className={styles.follow_btn} onClick={() => { 
                  follow(user.id);
                }}
                  >Follow Professional</button>}
              </div>
            </div>
          </div>
)


}






export default User;