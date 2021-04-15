import {
    GET_HOURLY_SUCCESS,
    GET_HOURLY_FAILED,
} from '../constants/ActionTypes'
const initialState = [];
const hourlyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOURLY_SUCCESS: 
            return action.hourly;
        case GET_HOURLY_FAILED:
            return initialState;
        default:
            return state;
    }
}
export default hourlyReducer