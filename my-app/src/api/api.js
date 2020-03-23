import * as axios from 'axios'

const instanse = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "400f7aec-6eff-4a2c-b11a-fc7b50db4ddc"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersREQ = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    }); 
    },

    getUserProfile(userId) {
        console.warn('Obsolete method. Please use ProfileREQ')
        return ProfileREQ.getUserProfile(userId);
        
    
    }
}

export const ProfileREQ = {
    getUserProfile(userId) {
        return instanse.get(`profile/` + userId).then(response => {
        return response.data
    }); 
    },
    getUserStatus(userId) {
        return instanse.get(`profile/status/` + userId).then(response => {
        return response.data
    }); 
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status} )
    
    },
}



export const FollowREQ = {
    unFollowUser (userId) {
        return instanse.delete(`follow/${userId}`).then(response => {
        return response.data
    }); 
    },

    followUser(userId) {
        return instanse.post(`follow/` + userId).then(response => {
        return response.data
    }); 
    }
}

export const AuthREQ = {
    getMe() {
        return instanse.get(`auth/me`).then(response => {
            return response.data
        }); 
    }
}


