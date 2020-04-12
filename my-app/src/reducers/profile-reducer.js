
import {SET_PROFILE, SET_STATUS, SUCCESS_SAVE_PHOTO} from '../actions/types';

let initionalState = {
    profile: null,
    status: 'Напишите что-нибудь'
}

const profileReducer = (state = initionalState, action) => {
    
    switch (action.type) {
        case SET_PROFILE: {
            
            return {...state, profile: action.profile}
            
        }
        case SUCCESS_SAVE_PHOTO: {
            
            return {...state, profile: {...state.profile, photos: action.photos}}
            
        }
        case SET_STATUS: {
            
            return {...state, status: action.status}
            
        }
        default: 
        return state;
    }
}



export default profileReducer;