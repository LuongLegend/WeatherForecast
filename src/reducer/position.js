import {    
    CHANGE_DT
} from '../constants/ActionTypes'
const initialState = {
    lat: '21.0244347',
    lon: '105.79381839999999',
    dt: null
}

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DT:
            return {
                ...state,
                dt: action.dt
            }
        default:
            return state;
    }
}
export default positionReducer