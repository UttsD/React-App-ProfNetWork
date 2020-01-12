import React from 'react';
import s from './Banner.module.css'
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div className={s.banner}>
            <div className="container">
                <div className={s.row}>
                    <div className={s.user}>
                        <h2>User Name</h2>
                        <h5>User specialty</h5>
                    </div>
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
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog Posts</a></li>
                    <li><NavLink to="/conversations" activeclassNameName={s.activeLink}> Conversations</NavLink></li>
                    <li><a href="#">Followers (241)</a></li>
                    <li><a href="#">Following</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Banner;