import {
    FOLLOW_USER,
    UNFOLLOW_USER,
    SET_USER,
    SET_CURRENT_PAGE,
    SET_USERS_COUNT,
    TOGGLE_IS_FETCHING,
    DISABLE_FOLLOW_BUTTON
} from './types';

import {
    UsersREQ,
    FollowREQ
} from '../api/api'

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

const followUnfollow = async (dispath, userID, apiMethod, actionCreator) => {
    dispath(disableButton(true, userID));
    let data = await apiMethod(userID);
    if (data.resultCode === 0) {
        dispath(actionCreator(userID));
    }
    dispath(disableButton(false, userID));
}

export const getUsers = (currentPage, pageSize) => {
    return async (dispath) => {
        dispath(setFetching(true));
        let data = await UsersREQ.getUsers(currentPage, pageSize);
        dispath(setFetching(false));
        dispath(setCurrentPage(currentPage));
        dispath(setUsers(data.items));
        dispath(setTotalUsersCount(data.totalCount));

    }
}

export const followThunk = (userID) => {
    return async (dispath) => {
        followUnfollow(dispath, userID, FollowREQ.followUser.bind(FollowREQ), follow);
    }
}
export const unFollowThunk = (userID) => {
    return async (dispath) => {

        followUnfollow(dispath, userID, FollowREQ.unFollowUser.bind(FollowREQ), unfollow);
    }
}