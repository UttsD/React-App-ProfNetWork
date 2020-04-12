import React from 'react';
import Post from './Post/Post';

const Posts = React.memo( props => {
    
    let PostsJSX = props.posts.map(p => <Post name={p.name} likes={p.likes}  desc = {p.desc} text = {p.text}/>);

    return (

        <div className="all_posts">
            {PostsJSX}
        </div>

    );
});

export default Posts;