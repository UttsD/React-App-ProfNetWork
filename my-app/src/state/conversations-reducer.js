const SEND_MESSAGE = 'SEND-MESSAGE';
const TYPING_MESSAGE = 'TYPING-MESSAGE';

let initionalState = {
    messages: [
        {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1"},
        {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2"},
        {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3"},
        {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit4"},
        {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit5"},
        {id: 6, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit6"}
    ],
    dialogs: [
        {id: 1, name: "Johs Vashington"},
        {id: 2, name: "Jack Vorobey"},
        {id: 3, name: "Emma Watson"},
        {id: 4, name: "Carl First"},
        {id: 5, name: "Carl Second"},
        {id: 6, name: "Carl Third"}
    ],
    newMessageText: 'Введите сообщение'
}

const conversationsReducer = (state = initionalState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case TYPING_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }

}

export let sendMessageActionCreator= () =>{
    return {type: SEND_MESSAGE}
}

export let typingMessageActionCreator= (message) =>{
    return {type: TYPING_MESSAGE, message: message}
}

export default conversationsReducer;