import { takeEvery, call, put, delay, select } from 'redux-saga/effects' //non-blocking
import { showLoading, hideLoading } from '../actions/ui'
import { getHourlyFailed, getHourlySuccess } from '../actions/hourly'
import { getDailyFailed, getDailySuccess } from '../actions/daily'
import { getCurrentSuccess, getCurrentFailed } from '../actions/current'
import { changeDateTime } from '../actions/position'
import { GET_WEATHER_FORECAST } from '../constants/ActionTypes'
import callApiWeather from '../utils/callApi'

function* watchFetchWeatherForecast() {
    yield delay(1000);
    yield put(showLoading());
    const position = yield select(state => state.position);
    const res = yield call(() => callApiWeather({
        units: 'metric',
        lat: position.lat,
        lon: position.lon,
        lang: 'vi'
    }));
    if (res) {
        const { current, daily, hourly } = res;
        yield put(getDailySuccess(daily));
        yield put(getHourlySuccess(hourly));
        yield put(getCurrentSuccess(current));
        yield put(changeDateTime(daily[0].dt));
    }
    else {
        yield put(getHourlyFailed());
        yield put(getDailyFailed());
        yield put(getCurrentFailed());
    }
    // if (res && res.status === 200) {
    //     //dispatch action
    //     yield put(getUserSuccess(res.data))
    // }
    yield put(hideLoading());
}
function* rootSaga() {
    yield takeEvery(GET_WEATHER_FORECAST, watchFetchWeatherForecast);
}

export default rootSaga