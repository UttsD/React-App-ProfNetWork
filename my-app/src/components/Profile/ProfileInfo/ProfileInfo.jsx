import React, { useState } from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileAboutSection from './ProfileAboutSection'
import ReduxProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, savePhoto,  isOwner, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }

    const onChoosePhoto = e => {

        if (e.target.files.length) {
            debugger;
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {

      saveProfile(formData).then(() => {
           setEditMode(false);
      });
            
    
        

    }
    return (

        <div class="details">
            <div class={s.user_photo}>
                <img src={profile.photos.large || "https://tattoo.tattooawards.com/uploads/0622de3fa1b292e57a795dbd9597fd41/90433/570x525_5d0b99866b9fe.jpg"}
                    width="245px" alt="User-photo"></img>
                {isOwner && <input type={"file"} onChange={onChoosePhoto}></input>}


            </div>
            {editMode 
            ? <ReduxProfileDataForm   initialValues={profile} profile={profile}  onSubmit={onSubmit} /> 
            : <ProfileAboutSection profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} />}
            
        </div>
    );
};

export default ProfileInfo;