import React from 'react';
import { sendMessageActionCreator } from "../../actions/conversations-actions";
import Conversations from "./Conversations"
import {connect} from 'react-redux'
import {witsAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose } from 'redux'



let mapStateToProps = (state) => {
    return {
        newMessageText: state.conversations.newMessageText,
        messages: state.conversations.messages,
        dialogs: state.conversations.dialogs,
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message_text) => {
            dispatch(sendMessageActionCreator(message_text));
        }
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    witsAuthRedirect
) (Conversations);