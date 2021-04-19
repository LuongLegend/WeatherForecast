import { call, put, delay, select, takeLatest } from 'redux-saga/effects' //non-blocking
import { showLoading, hideLoading } from '../actions/ui'
import { getDailyFailed, getDailySuccess } from '../actions/daily'
import { getCurrentSuccess, getCurrentFailed } from '../actions/current'
import { changeCoords, initPosition } from '../actions/position'
import { GET_WEATHER_FORECAST, CHANGE_ADDRESS } from '../constants/ActionTypes'
import { callApiWeather, callApiGeocoding } from '../utils/callApi'

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
        const { current, daily } = res;
        yield put(getDailySuccess(daily));
        yield put(getCurrentSuccess(current));
    }
    else {
        yield put(getDailyFailed());
        yield put(getCurrentFailed());
    }
    yield put(hideLoading());
}

function* watchChangeAddress({ address }) {
    if (address === '') {
        yield put(initPosition());
    }
    else {
        yield delay(500);
        const res = yield call(() => callApiGeocoding({
            q: address,
            lang: 'vi'
        }));
        if (res && res.length !== 0) {
            const { lat, lon } = res[0];
            yield put(changeCoords({ lat, lon }));
        }
        else {
            yield put(changeCoords({ lat: null, lon: null }));
        }
    }

}
function* rootSaga() {
    yield takeLatest(GET_WEATHER_FORECAST, watchFetchWeatherForecast);
    yield takeLatest(CHANGE_ADDRESS, watchChangeAddress)
}

export default rootSaga