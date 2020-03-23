import {UsersREQ, FollowREQ} from '../api/api'

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DISABLE_FOLLOW_BUTTON = 'DISABLE_FOLLOW_BUTTON'

let initionalState = {
    users: [],
    pageSize: 50,
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
                users: state.users.map((user) => {

                    if (user.id === action.userID) {
                        
                        return {

                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        }
        
        case UNFOLLOW_USER: {

            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userID) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
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
                disableFollowButton: action.disableFollowButton
                ? [...state.disableFollowButton, action.id]
                : state.disableFollowButton.filter(id => id != action.id)
            }
        }
        default: {
            return {
                ...state
            };
        }
    }


}

export let follow = (userID) => ({
    type: FOLLOW_USER,
    userID: userID
});
export let unfollow = (userID) => ({
    type: UNFOLLOW_USER,
    userID: userID
});

export let setUsers = (users) => ({
    type: SET_USER,
    users
});

export let setCurrentPage = (pageID) => ({
    type: SET_CURRENT_PAGE,
    pageID
});
export let setTotalUsersCount = (totalCount) => ({
    type: SET_USERS_COUNT,
    totalCount
});
export let setFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export let disableButton = (disableFollowButton, id) => ({
    type: DISABLE_FOLLOW_BUTTON,
    disableFollowButton,
    id
});

export const getUsers = (currentPage, pageSize) => { 
return (dispath) => {
    dispath(setFetching(true));
    
    UsersREQ.getUsers(currentPage, pageSize).then(data => {
        dispath(setFetching(false));
        dispath(setUsers(data.items));
        dispath(setTotalUsersCount(data.totalCount));
      })
    }
}

export const followThunk = (userID) => {
    return (dispath) => {
        dispath(disableButton(true, userID));
                  FollowREQ.followUser(userID).then(data => {
                    if (data.resultCode === 0){
                        dispath(follow(userID));
                    }    
                    dispath(disableButton(false, userID));

                    
                  
                  
                  });
    }
}
export const unFollowThunk = (userID) => {
    return (dispath) => {
        dispath(disableButton(true, userID));
                  FollowREQ.unFollowUser(userID).then(data => {
                    if (data.resultCode === 0){
                        dispath(unfollow(userID));
                    }    
                    dispath(disableButton(false, userID));

                    
                  
                  
                  });
    }
}
export default usersReducer;