import React from 'react';
import { addPostActionCreator } from "../../state/blog-reducer";
import { updatePostActionCreator } from "../../state/blog-reducer";
import Blog from './Blog';
import {connect} from 'react-redux'

/*const reduxBlogContainer = (props) => {
  //let state = props.store.getState();

  return (
    <StoreContect.Consumer> 
      { (store) => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
      
        }
      
      
      
        let onChangeText = (text) => {
          store.dispatch(updatePostActionCreator(text));
        };

      return (<Blog changeText={onChangeText} addPost={onAddPost} posts = {state.blog.posts} newPostText = {state.blog.newPostText}/>)}
      }
      </StoreContect.Consumer>
   

  );

};
*/
let mapStateToProps = (state) => {
  return {
    posts: state.blog.posts,
    newPostText: state.blog.newPostText
  }
  
};

let mapDispatchToProps = (dispatch) => {
  
  return {
    changeText: (text) => {
      dispatch(updatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;