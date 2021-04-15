import {
    GET_WEATHER_FORECAST
} from '../constants/ActionTypes'

export const getWeatherForecast = () => {
    return {
        type: GET_WEATHER_FORECAST,
    }
}
