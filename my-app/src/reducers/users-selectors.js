import {createSelector} from 'reselect'



export const getUsers = state => {
    return state.users.users;

}

export const getUsersFromState= createSelector(getUsers,(
    users => {
        return users.filter(u => true)
    }
))

export const getPageSize = state => {
    return state.users.pageSize;
}

export const getCurrentPage = state => {
    return state.users.currentPage;
}

export const getDisableFollowButton = state => {
    return state.users.disableFollowButton;
}

export const getTotalUserCount = state => {
    return state.users.totalUserCount;
}

