import React from 'react';
import { addPostActionCreator } from "../../state/blog-reducer";
import { updatePostActionCreator } from "../../state/blog-reducer";
import Blog from './Blog';


const BlogContainer = (props) => {
  
  let state = props.store.getState();
  
  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());

  }



  let onChangeText = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  };

  return (

    <Blog changeText={onChangeText} addPost={onAddPost} posts = {state.blog.posts} newPostText = {state.blog.newPostText}/>

  );

};

export default BlogContainer;