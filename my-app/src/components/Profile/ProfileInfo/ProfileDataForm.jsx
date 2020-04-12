import React from 'react';
import Contact from './Contact';
import s from './ProfileInfo.module.css'
import { createMyField } from '../../../helpers/form-helpers';
import { FormControl } from '../../common/FormsValid/FormsValid'
import { reduxForm } from 'redux-form'

const TextInput = FormControl('input')
const TextArea = FormControl('textarea')

const ProfileDataForm = ({ isOwner, goToEditMode, handleSubmit, profile, error}) => {
    return <div class={s.profile_body}>
       <form onSubmit={handleSubmit}>
           <button onClick={goToEditMode} >Save</button>
           {error &&
                            <div className={s.form_summory_error}>
                                {error}

                            </div>
                        }
           
           
           
           <div><b>Looking for a job:</b> 
           {createMyField(null, 'lookingForAJob', TextInput, [], '', { type: 'checkbox' })}</div>

        <div><b>What I'm looking for:</b> {createMyField("What I'm looking for", "lookingForAJobDescription", TextArea, [], '', { type: 'textarea' })} </div>
        
        <div><b>About Me:</b> {createMyField("About Me", "aboutMe", TextArea, [], '', { type: 'textarea' })}</div>
       
        
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key="key"> 
                <b>{key}:</b>{createMyField(key, "contacts." + key, TextInput, [], "")}
                
                </div>
        })}
        </div>
       </form>
    </div>
}


const ReduxProfileDataForm = reduxForm({
    // a unique name for the form
    form: 'editProfile-form'
})(ProfileDataForm)

export default ReduxProfileDataForm;