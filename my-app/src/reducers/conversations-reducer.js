import {SEND_MESSAGE} from '../actions/types';


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
    ]
}

const conversationsReducer = (state = initionalState, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE:
            let message = action.message_text
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: message}],
                
            }
    
        
        
        default: 
            return {...state};
    }

}



export default conversationsReducer;