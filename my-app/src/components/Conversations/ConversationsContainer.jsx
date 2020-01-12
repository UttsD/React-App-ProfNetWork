import React from 'react';
import s from './Conversations.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { sendMessageActionCreator } from "../../state/conversations-reducer";
import { typingMessageActionCreator } from "../../state/conversations-reducer";
import Conversations from "./Conversations"


const ConversationsContainer = (props) => {

    let state = props.store.getState();

    
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let typingMessage = (message) => {
        
        props.store.dispatch(typingMessageActionCreator(message));
    }

    
    return (

        <Conversations sendMessage = {sendMessage} typingMessage = {typingMessage} newMessageText = {state.conversations.newMessageText} messages = {state.conversations.messages} 
        dialogs = {state.conversations.dialogs}/>
    );
};


export default ConversationsContainer;