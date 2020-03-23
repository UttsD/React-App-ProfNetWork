import {AuthREQ} from '../api/api'

const SET_USER_DATA = "SET_USER_DATA";



let initionalState = {
    usersID: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

}
const authReducer = (state = initionalState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        
        default: {
            return {
                ...state
            };
        }
    }


}

export let setUserData = (userID, email, login) => ({
    type: SET_USER_DATA,
    data: {userID, email, login}
});

export const getMeThunk = () => {
    return (dispath) => {
        AuthREQ.getMe().then(data => {
            let {id, login, email} = data.data;
            if (data.resultCode === 0){
                dispath(setUserData(id, email, login));
            }
          })

    }
}


export default authReducer;