import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Banner from '../Banner/Banner';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    
    return (<>
        <Banner profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
        <div class="container">
    <section class='about-section'>
        <h3 class='headers'>About</h3>
        

        <ProfileInfo profile = {props.profile}/>
        
        
    </section>
    </div>

    </>
    );
};

export default Profile;