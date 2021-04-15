import {
    GET_DAILY_SUCCESS,
    GET_DAILY_FAILED,
} from '../constants/ActionTypes'

export const getDailySuccess = (daily) => {
    return {
        type: GET_DAILY_SUCCESS,
        daily
    }
}
export const getDailyFailed = () => {
    return {
        type: GET_DAILY_FAILED
    }
}