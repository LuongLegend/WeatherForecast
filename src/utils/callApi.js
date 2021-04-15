import { API_HOST, WEATHER_API_KEY } from '../constants/config'
import axios from 'axios'
//call-api
export default async function callApiWeather(params) {
    try {
        params.appid = WEATHER_API_KEY;
        const response = await axios({
            method: 'GET',
            baseURL: API_HOST,
            params
        })
        return response.data
    } catch (err) {
        console.log('err api', err);
    }
}