import {
    GET_DAILY_SUCCESS,
    GET_DAILY_FAILED,
} from '../constants/ActionTypes'
const initialState = [];
const dailyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DAILY_SUCCESS: 
            return action.daily;
        case GET_DAILY_FAILED:
            return initialState;
        default:
            return state;
    }
}
export default dailyReducer