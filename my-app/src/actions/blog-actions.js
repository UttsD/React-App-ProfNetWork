import {ADD_POST, DELETE_POST} from './types'

export let addPostActionCreator = (post_title, post_description, post_text) =>  ({type: ADD_POST, post_title, post_description, post_text});
export let deletePost = (postId) => ({type: DELETE_POST, postId})