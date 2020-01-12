import * as serviceWorker from './serviceWorker';

import store from './state/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext'

import {Route, BrowserRouter} from 'react-router-dom'



 let reRender = (state) => {
     ReactDOM.render(
    <BrowserRouter>
    <StoreContext.Provider value = {store}>
    <App /> 
    </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));
}



reRender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRender(state);

});
serviceWorker.unregister();

