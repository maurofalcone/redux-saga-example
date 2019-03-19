import { all } from 'redux-saga/effects'
import { newsWatcher } from './news'

export default function* rootSaga() {
    yield all([
        newsWatcher()
    ])
}