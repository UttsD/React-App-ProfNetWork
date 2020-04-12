import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Banner from '../Banner/Banner';


const Profile = (props) => {
    
    return (<>
        <Banner profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
        <div class="container">
    <section class='about-section'>
        <h3 class='headers'>About</h3>
        

        <ProfileInfo saveProfile={props.saveProfile} isOwner = {props.isOwner} profile = {props.profile} savePhoto = {props.savePhoto}/>
        
        
    </section>
    </div>

    </>
    );
};

export default Profile;