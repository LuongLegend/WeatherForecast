import {
    GET_CURRENT_SUCCESS,
    GET_CURRENT_FAILED,
} from '../constants/ActionTypes'
const initialState = null;
const currentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENT_SUCCESS: 
            return action.current;
        case GET_CURRENT_FAILED:
            return null;
        default:
            return state;
    }
}
export default currentReducer