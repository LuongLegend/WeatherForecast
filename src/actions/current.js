import {
    GET_CURRENT_SUCCESS,
    GET_CURRENT_FAILED,
} from '../constants/ActionTypes'

export const getCurrentSuccess = (current) => {
    return {
        type: GET_CURRENT_SUCCESS,
        current
    }
}
export const getCurrentFailed = () => {
    return {
        type: GET_CURRENT_FAILED
    }
}