import {createStore, combineReducers} from 'redux';
import conversationsReducer from './conversations-reducer';
import blogReducer from './blog-reducer';


let reducers = combineReducers({
    conversations: conversationsReducer,
    blog: blogReducer
});

let store = createStore(reducers);

export default store;