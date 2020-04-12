import {AuthREQ, SecurityAPI} from '../api/api'
import { stopSubmit } from 'redux-form';
import {SET_USER_DATA, GET_CAPTCHA_SUCCESS} from './types';


export let setUserData = (userID, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {userID, email, login, isAuth}
});



export const getMeThunk = () => {
    return async (dispath) => {
       let response = await AuthREQ.getMe(); 
            if (response.resultCode === 0){
                
                let {id, login, email} =response.data;
                dispath(setUserData(id, login, email, true));
            }          
    }
    
}

export let getCaptchaSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_SUCCESS,
    data: {captchaUrl}
});

export const getCaptchaUrl = () => {
    return async (dispath) => {
       let response = await SecurityAPI.getCaptchaUrl(); 
       const captchaUrl = response.url;
       
       dispath(getCaptchaSuccess(captchaUrl))
       
            }          
    }
    

export const login = (email, password, rememberMe, captcha) => {
    return async (dispath) => {
        
        let response = await AuthREQ.login(email, password, rememberMe, captcha);
        
            if (response.resultCode === 0){
                dispath(getMeThunk());
            }
                
             else{
                if(response.resultCode === 10){
                    dispath(getCaptchaUrl());
                }
                let message = response.messages.length > 0? response.messages[0] : 'Some error'
                let action = stopSubmit('login', {_error: message});
                dispath(action);
            }
    }
}
export const logout = () => {
    return async (dispath) => {
        let response = await AuthREQ.logout();
            if (response.resultCode === 0){
                dispath(setUserData(null, null, null, false));
            }
    }
}
