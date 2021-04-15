import {
    GET_HOURLY_SUCCESS,
    GET_HOURLY_FAILED,
} from '../constants/ActionTypes'

export const getHourlySuccess = (hourly) => {
    return {
        type: GET_HOURLY_SUCCESS,
        hourly
    }
}
export const getHourlyFailed = () => {
    return {
        type: GET_HOURLY_FAILED
    }
}