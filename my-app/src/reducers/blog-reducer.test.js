import blogReducer, { addPostActionCreator, deletePost } from './blog-reducer';
import React from 'react';
import { render } from '@testing-library/react';

let state = {
    posts: [
        { id: 1, name: "Post Name 3421", desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  likes: 33 },
        { id: 2, name: "Post Name 2aaa", desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",likes: 999 },
        { id: 3, name: "Post Name 3",desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", likes: 999 },
        { id: 4, name: "Post Name 4", desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",likes: 999 },
        { id: 5, name: "Post Name 5",desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", likes: 999 },
        { id: 6, name: "Post Name 6", desc: "Extra Post Information", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",likes: 999 }
    ]
}

test('add a new post', () => {
// 1. Prepare test data
    let action = addPostActionCreator('title', 'hmm', 'lorem');
   
    let newPost = blogReducer(state, action);
    expect(newPost.posts.length).toBe(7)
  });

test('Post text', () => {
// 1. Prepare test data
    let action = addPostActionCreator('title', 'hmm', 'lorem');
   
//2. Do some action   
    let newPost = blogReducer(state, action);
//3. expectaation

    expect(newPost.posts[6].name).toBe('title')
  });
  
test('Delete posts', () => {
// 1. Prepare test data
    let action = deletePost(1);
 
   
//2. Do some action   
    let newPost = blogReducer(state, action);
//3. expectaation

    expect(newPost.posts.length).toBe(5)
  });
  


