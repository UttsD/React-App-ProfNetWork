import {applyMiddleware, createStore, combineReducers} from 'redux';
import conversationsReducer from './conversations-reducer';
import blogReducer from './blog-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import { compose } from 'redux'


let reducers = combineReducers({
    conversations: conversationsReducer,
    blog: blogReducer,
    users: usersReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;