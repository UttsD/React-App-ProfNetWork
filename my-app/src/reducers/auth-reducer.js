
import {SET_USER_DATA, GET_CAPTCHA_SUCCESS} from '../actions/types'

let initionalState = {
    userID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null

}
const authReducer = (state = initionalState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
        {
            
            return {
                ...state,
                ...action.data
                
            }
        }
        
        default: {
            return {
                ...state
            };
        }
    }


}


export default authReducer;