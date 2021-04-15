import { takeLatest, takeEvery, call, put, delay, select } from 'redux-saga/effects' //non-blocking
import { showLoading, hideLoading } from '../actions/ui'
import callApi from '../utils/callApi'

function* rootSaga() {
    // yield takeLatest(FETCH_USER, watchFetchListUser);
    // yield takeEvery(DELETE_USER, watchDeleteUser);
}

export default rootSaga