import React from 'react';
import s from './Conversations.module.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../helpers/validators/validators'

import {FormControl} from '../common/FormsValid/FormsValid'

const Textarea = FormControl('textarea')
const  maxLength1000 =  maxLengthCreator(1000);

const Conversations = (props) => {
    let DialogsJSX = props.dialogs.map(el => <Dialog userName = {el.name} dialogId = {el.id} />);
    let MessagesJSX = props.messages.map(el => <Message message = {el.message}/>)
    

    let onSendMessage = (values) => {
        console.log(values.message_text)
        props.sendMessage(values.message_text);
    }

    /*let onSendMessage = () => {
        props.sendMessage();
    }

    let onTypingMessage = (e) => {
        let message = e.target.value;
        props.typingMessage(message);
    }
*/
    if (!props.isAuth) return  <Redirect to = {"/login"}></Redirect>
    return (

        
        <div className = {s.conv_section + ' d_flex center'}>
            <div className = 'conversations'>
                {DialogsJSX}  
            </div>
            <div className={s.messages}>
                {MessagesJSX}
               <SendReduxForm onSubmit = {onSendMessage}  
                newMessageText = {props.newMessageText}
                /> 
            </div>
            

        </div>
    );
};

const SendMessageForm = props => {
    return (
        <div className={s.form__box}>
      <form onSubmit={props.handleSubmit} className = 'message_box' >
                <Field value = {props.newMessageText} onChange = {props.onTypingMessage} component={Textarea} name="message_text" placeholder = 'Enter your message' component={Textarea} validate={[required, maxLength1000]}> </Field>
                <div>
                    <button className = {s.send} >Отправить</button>
                </div>
            </form></div>
    )
  }
  



const SendReduxForm = reduxForm({
    // a unique name for the form
    form: 'sendMessage'
  })(SendMessageForm)

export default Conversations;