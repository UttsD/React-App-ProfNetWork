import {SET_INITIALIZED} from '../actions/types'

let initionalState = {
    initialized: false

}
const appReducer = (state = initionalState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: {
            
            return {
                ...state,
                initialized: true
            }
        }

        default: {
            return {
                ...state
            };
        }
    }
}

export default appReducer;