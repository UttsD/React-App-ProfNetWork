import React from 'react';
import Contact from './Contact';
import s from './ProfileInfo.module.css'


const ProfileAboutSection = ({profile, isOwner, goToEditMode}) => {
    
    return <div class={s.profile_body}>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob &&

            <div><b>What i'm looking for:</b> {profile.lookingForAJobDescription} </div>}
        <div><b>About Me:</b> {profile.aboutMe}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} ContactTitle={key} ContactValue={profile.contacts[key]} />
        })}
        </div>
        {isOwner && <button onClick={goToEditMode}>Edit</button> }
    </div>
}




export default ProfileAboutSection;