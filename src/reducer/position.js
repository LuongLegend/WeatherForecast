import {
    CHANGE_ADDRESS,
    CHANGE_COORDS,
    INIT_COORDS,
} from '../constants/ActionTypes'

const initialState = {
    lat: '21.0244347',
    lon: '105.79381839999999',
    address: '',
}

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ADDRESS:
            return {
                ...state,
                address: action.address
            }
        case CHANGE_COORDS:
            const { lat, lon } = action.coords;
            return {
                ...state,
                lat,
                lon
            }
        case INIT_COORDS: 
            return initialState
        default:
            return state;
    }
}
export default positionReducer