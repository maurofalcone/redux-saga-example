import { all } from 'redux-saga/effects'
import { newsWatcher } from './news'
import { usersWatcher } from './login'

export default function* rootSaga() {
    yield all([
        newsWatcher(),
        usersWatcher()
    ])
}