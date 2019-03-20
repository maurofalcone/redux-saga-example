import { put, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions/login'

function* loginUser() {
    try {
        //mocked user
        yield put({ type: LOGIN_SUCCESS, payload:{ user:'user', password:'password' }  })
    }
    catch(err) {
        yield put({ type: LOGIN_FAILURE, payload: 'an error has occurred' })
    }
}

export function* usersWatcher() {
     yield takeLatest(LOGIN_REQUEST, loginUser)
}