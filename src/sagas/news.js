import { put, takeLatest } from 'redux-saga/effects'
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../actions/news'

function* fetchNews() {
    try {
        const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-19&sortBy=publishedAt&apiKey=8bf617afe9bc42cfaccd5be3d4aa2b82')
        .then(response => response.json())
        console.log(json)
        if(json.status === 'ok')
            yield put({ type: GET_NEWS_SUCCESS, payload: json })
         else
            yield put({ type: GET_NEWS_FAILURE, payload: 'an error has ocurred' })
    }
    catch(err) {
        yield put({ type: GET_NEWS_FAILURE, payload: 'an error has occurred' })
    }
}

export function* newsWatcher() {
     yield takeLatest(GET_NEWS_REQUEST, fetchNews)
}