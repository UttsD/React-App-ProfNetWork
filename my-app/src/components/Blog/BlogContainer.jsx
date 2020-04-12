import React from 'react';
import { addPostActionCreator } from "../../actions/blog-actions";
import Blog from './Blog';
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
    newPostText: state.blog.newPostText
  }
  
};

let mapDispatchToProps = (dispatch) => {
  
  return {
    
    addPost: (post_title, post_description, post_text) => {
      dispatch(addPostActionCreator(post_title, post_description, post_text))
    }
  }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;