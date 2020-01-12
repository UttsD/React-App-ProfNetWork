import React from 'react';
import s from './Blog.module.css'
import Posts from './Posts/Posts';



const Blog = (props) => {

  let onAddPost = () => {
    props.addPost();
  }



  let onChangeText = (e) => {

    let text = e.target.value;
    props.changeText(text);
  };

  return (



    <section className="blog">
      <h3 className='headers'>Blog</h3>
      <Posts posts={props.posts} />
      <textarea value={props.newPostText} onChange={onChangeText} />
      <div>
        <button onClick={onAddPost}>Add Post</button>
      </div>

    </section>


  );

};

export default Blog;