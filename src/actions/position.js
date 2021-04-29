import {
    CHANGE_ADDRESS,
    CHANGE_COORDS, 
    INIT_COORDS,
    CHANGE_TEMP_TYPE
} from '../constants/ActionTypes'

export const changeAddress = (address) => {
    return {
        type: CHANGE_ADDRESS,
        address
    }
}

export const changeCoords = (coords) => {
    return {
        type: CHANGE_COORDS,
        coords
    }
}

export const initPosition = () => {
    return {
        type: INIT_COORDS
    }
}

export const changeTempType = (tempType) => {
    return {
        type: CHANGE_TEMP_TYPE,
        temp: tempType
    }
}