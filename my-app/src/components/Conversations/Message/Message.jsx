import React from 'react';
import s from '../Conversations.module.css'
import { NavLink } from 'react-router-dom';

const Message = (props) => {
    return (
                <div className = {s.dialog}>
                    <div className = {s.user}><span>{props.userName}</span> </div>
                    <div className = {s.message}><p>{props.message}</p></div>
                </div> 
                
    );
};





export default Message;