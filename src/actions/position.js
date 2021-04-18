import {
    CHANGE_DT
} from '../constants/ActionTypes'

export const changeDateTime = (dt) => {
    return {
        type: CHANGE_DT,
        dt
    }
}
