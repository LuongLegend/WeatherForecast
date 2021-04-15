import { combineReducers } from 'redux'
import uiReducer from './ui'
import positionReducer from './position.js'
import dailyReducer from './daily.js'
import hourlyReducer from './hourly.js'
import currentReducer from './current.js'

const rootReducer = combineReducers({
    ui: uiReducer,
    position: positionReducer,
    daily: dailyReducer,
    hourly: hourlyReducer,
    current: currentReducer
});

// export default rootReducer;
export default rootReducer;