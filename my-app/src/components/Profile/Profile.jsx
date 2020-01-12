import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
    <section class='about-section'>
        <h3 class='headers'>About</h3>
        

        <ProfileInfo />
        
        
    </section>
    

    
    );
};

export default Profile;