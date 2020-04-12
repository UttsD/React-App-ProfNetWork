
import {updateObjectInArray} from '../helpers/object-helpers'

import { FOLLOW_USER, 
 UNFOLLOW_USER,
 SET_USER, SET_CURRENT_PAGE, 
 SET_USERS_COUNT,
 TOGGLE_IS_FETCHING, 
 DISABLE_FOLLOW_BUTTON } from '../actions/types'

let initionalState = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    disableFollowButton: []

}
const usersReducer = (state = initionalState, action) => {

    switch (action.type) {
        case FOLLOW_USER: {

            return {
                ...state,
                users: updateObjectInArray( state.users, action.userID, 'id', {followed: true})
               
            }
        }

        case UNFOLLOW_USER: {

            return {
                ...state,
                users: updateObjectInArray( state.users, action.userID, 'id', {followed: false})
            }
        }

        case SET_USER: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageID
            }
        }

        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case DISABLE_FOLLOW_BUTTON: {

            return {

                ...state,
                disableFollowButton: action.disableFollowButton ? [...state.disableFollowButton, action.id] : state.disableFollowButton.filter(id => id != action.id)
            }
        }
        default: {
            return {
                ...state
            };
        }
    }


}

export default usersReducer;