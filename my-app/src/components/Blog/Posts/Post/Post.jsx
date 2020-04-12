import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.one_post}>
                <div className={s.post_img}>
                    <img src="https://images.unsplash.com/photo-1576080971617-5b789d9bcee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
                        width="280px" alt="post image"></img>
                </div>
                <div className="post">
                    <div className={s.post_info}>
                    <div className="info">
                        <h5>{props.name}</h5>
                    <span>{props.desc}</span> 
                    </div>
                    
                    <div className={s.post_btns + " " + "icon_btns"} >
                        <a href="#">
                            <i className="fa fa-bookmark-o"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-exclamation"></i>
                        </a>
                    </div></div>
                    <div className={s.post_txt}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
            
        
    
    );
};

export default Post;