import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    
    if(!props.profile) {
        return <Preloader />
    }
    
    
    return (
        
        <div class="details">
        <div class={s.user_photo}>
            <img src={props.profile.photos.large}
                width="245px" alt="User-photo"></img>
              
               
        </div>
        <div class={s.profile_body}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, maxime, excepturi, mollitia, voluptatibus similique aliquidautem laudantium sapiente ad enim ipsa modi labo rum accusantium deleniti neque architecto vitae.<br></br>

                <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nihil, dolores, culpa ullam vero ipsum
                placeat accusamus nemo itate id molestiae consectetur quae pariatur repudi andae vel ex quaerat nam
                iusto aliquid laborum quia adipisci aut ut imcati nisi deleniti tempore maxime sequi fugit reiciendis
                libero quo. Rerum, assumenda.<br></br>
                <br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, at nemo inventore
                temporibus corporis suscipit.</p>
        </div>
        </div>
    );
};

export default ProfileInfo;