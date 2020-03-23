import {UsersREQ} from '../api/api'
import {ProfileREQ} from '../api/api'

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initionalState = {
    profile: null,
    status: 'Напишите что-нибудь'
}

const profileReducer = (state = initionalState, action) => {
    
    switch (action.type) {
        case SET_PROFILE: {
            
            return {...state, profile: action.profile}
            
        }
        case SET_STATUS: {
            
            return {...state, status: action.status}
            
        }
        default: 
        return state;
    }
}


export let setProfile = (profile) => ({
    type: SET_PROFILE,
    profile
});
export let setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserData = (userID) => {
    return (dispath) => {       
        UsersREQ.getUserProfile(userID).then(data => {
            dispath(setProfile(data));
      })

    }
}
export const getUserStatus = (userID) => {
    return (dispath) => {
               
        ProfileREQ.getUserStatus(userID).then(data => {
            
            dispath(setStatus(data));
        
      })

    }
}

export const updateStatus = (status) => (dispath) => {
               
        ProfileREQ.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispath(setStatus(status));
            }              
      })

    }


export default profileReducer;