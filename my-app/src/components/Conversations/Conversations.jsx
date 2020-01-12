import React from 'react';
import s from './Conversations.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';




const Conversations = (props) => {

    
    
    let DialogsJSX = props.dialogs.map(el => <Dialog userName = {el.name} dialogId = {el.id} />);
    let MessagesJSX = props.messages.map(el => <Message message = {el.message}/>)

    
    let onSendMessage = () => {
        props.sendMessage();
    }

    let onTypingMessage = (e) => {
        let message = e.target.value;
        props.typingMessage(message);
    }

    
    return (

        
        <div className = {s.conv_section + ' d_flex center'}>
            <div className = 'conversations'>
                {DialogsJSX}  
            </div>
            <div className={s.messages}>
                {MessagesJSX}
                <div className = 'message_box'>
                <textarea value = {props.newMessageText} onChange = {onTypingMessage}> </textarea>
                <div>
                    <button className = {s.send} onClick = {onSendMessage}>Отправить</button>
                </div>
            </div>
            </div>
            

        </div>
    );
};


export default Conversations;