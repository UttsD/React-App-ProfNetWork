import {applyMiddleware, createStore, combineReducers} from 'redux';
import conversationsReducer from './conversations-reducer';
import blogReducer from './blog-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    conversations: conversationsReducer,
    blog: blogReducer,
    users: usersReducer,
    profile: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;