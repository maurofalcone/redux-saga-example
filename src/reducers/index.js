import { combineReducers } from 'redux'
import news from './news'
import login from './login'
const rootReducer = combineReducers({
  news,
  login
})

export default rootReducer
