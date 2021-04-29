import {
    CHANGE_ADDRESS,
    CHANGE_COORDS,
    INIT_COORDS,
    CHANGE_TEMP_TYPE
} from '../constants/ActionTypes'
let lat = 0;
let lon = 0;
navigator.geolocation.watchPosition(position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
})
const initialState = {
    lat,
    lon,
    temp: "C",
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
        case CHANGE_TEMP_TYPE:
            const { temp } = action;
            const newTemp = temp === "C" ? "F" : "C";
            return {
                ...state,
                temp: newTemp
            }
        case INIT_COORDS:
            return initialState
        default:
            return state;
    }
}
export default positionReducer