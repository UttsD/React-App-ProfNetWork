import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {

    
    
    let PostsJSX = props.posts.map(p => <Post name={p.name} likes={p.likes} />);

    return (

        <div className="all_posts">
            {PostsJSX}
        </div>

    );
};

export default Posts;