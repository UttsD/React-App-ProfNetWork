import {SET_INITIALIZED} from './types';
import {getMeThunk} from './auth-actions'

export const setInitialized = () => dispatch => {
    dispatch({
        type: SET_INITIALIZED
    })
};

export const Initialized = () => dispatch => {
    let promise = dispatch(getMeThunk());
    
    Promise.all([promise]).then(() => {
       
        dispatch(setInitialized());
    });
}