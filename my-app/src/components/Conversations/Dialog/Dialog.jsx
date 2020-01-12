import React from 'react';
import s from '../Conversations.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
                <div className = {s.dialog}>
                    <div className = {s.user}><NavLink to = {'/conversations/' + props.dialogId} >{props.userName}</NavLink> </div>
                    <div className = {s.message}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
                </div> 

    );
};

export default Dialog;