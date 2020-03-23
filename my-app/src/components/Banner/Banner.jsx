import React from 'react';
import s from './Banner.module.css'
import { NavLink } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo'

const Banner = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.banner}>
            <div className="container">
                <div className={s.row}>
                <ProfileInfo username = {props.profile.fullName} status = {props.status} updateStatus = {props.updateStatus}/>
                    <div className={s.buttons}>
                        <div className={s.rect_btns}>
                            <a href="#">
                                <i className="fa fa-share-alt"></i> Connect
                            </a>
                            <a href="#">
                                <i className="fa fa-user-plus"></i> Share
                            </a>
                        </div>
                        <div className="icon_btns">
                            <a href="#">
                                <i className="fa fa-bookmark-o"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-envelope-o"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-exclamation"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-menu">
                <ul className={s.nav}>
                    <li className="active"><NavLink to="/profile" activeclassNameName={s.activeLink}>Profile</NavLink> </li>
                    <li><NavLink to="/jobs" activeclassName={s.activeLink}>Jobs</NavLink></li>
                    <li><NavLink to="/contact" activeclassName={s.activeLink}>Contact</NavLink></li>
                    <li><NavLink to="/portfolio" activeclassName={s.activeLink}>Portfolio</NavLink></li>
                    <li><NavLink to="/blog" activeclassName={s.activeLink}> Blog Posts</NavLink></li>
                    <li><NavLink to="/conversations" activeclassName={s.activeLink}> Conversations</NavLink></li>
                    <li><a href="#">Followers (241)</a></li>
                    <li><a href="#">Following</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Banner;