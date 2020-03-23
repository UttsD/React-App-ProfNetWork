import React from 'react';
import { sendMessageActionCreator } from "../../state/conversations-reducer";
import { typingMessageActionCreator } from "../../state/conversations-reducer";
import Conversations from "./Conversations"
import {connect} from 'react-redux'
import {witsAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose } from 'redux'


/*const reduxConversationsContainer = (props) => {

    return (
        <StoreContect.Consumer>
            {(store) => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let typingMessage = (message) => {

                    store.dispatch(typingMessageActionCreator(message));
                }
                return (<Conversations sendMessage={sendMessage} typingMessage={typingMessage} newMessageText={state.conversations.newMessageText} messages={state.conversations.messages}
                    dialogs={state.conversations.dialogs} />)
            }}
        </StoreContect.Consumer>

    );
};*/

let authRedirect = witsAuthRedirect(Conversations);



let mapStateToProps = (state) => {
    return {
        newMessageText: state.conversations.newMessageText,
        messages: state.conversations.messages,
        dialogs: state.conversations.dialogs,
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        typingMessage: (message) => {
            dispatch(typingMessageActionCreator(message));
        }
        
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    witsAuthRedirect
) (Conversations);