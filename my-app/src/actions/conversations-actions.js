import {SEND_MESSAGE} from './types';

export let sendMessageActionCreator= (message_text) =>{
    return {type: SEND_MESSAGE, message_text}
}
