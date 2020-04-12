import {SET_PROFILE, SET_STATUS, SUCCESS_SAVE_PHOTO} from './types';
import {UsersREQ} from '../api/api'
import {ProfileREQ} from '../api/api'
import { stopSubmit } from 'redux-form';


export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export let successSavePhoto = (photos) => ({
    type: SUCCESS_SAVE_PHOTO,
    photos
});

export const getUserData = (userID) => {
    return async (dispath) => {   
        let response = await UsersREQ.getUserProfile(userID)
            dispath(setProfile(response));
    }
}
export const getUserStatus = (userID) => {
    return async (dispath) => {
        let response = await ProfileREQ.getUserStatus(userID)
            dispath(setStatus(response));
    }
}

export const updateStatus = (status) => async (dispath) => {
    try       
    {let response = await ProfileREQ.updateStatus(status)
            if (response.data.resultCode === 0){
                dispath(setStatus(status));
    }}
    catch(error){
        
    }
}

export const savePhoto = (file) => async (dispath) => {           
    let response = await ProfileREQ.savePhoto(file)
            if (response.data.resultCode === 0){
                dispath(successSavePhoto(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispath, getState) => {
    const userID  = getState().auth.userID;
    
    let response = await ProfileREQ.saveProfile(profile)
            if (response.data.resultCode === 0){
                
                dispath(getUserData(userID))
    }else{
        
        let action = stopSubmit('editProfile-form', {"contacts": {"facebook": response.data.messages[0]}});
        dispath(action);
        return Promise.reject();
    }
}
