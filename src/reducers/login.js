import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/login'
import initialState from '../initial-states/login'

const reducer = (state = initialState, action) => {
   switch (action.type) {
          case LOGIN_REQUEST:
               return { ...state, error:'', loading: true }
          case LOGIN_SUCCESS:
               return { ...state, user: action.payload, error:'', loading: false }
          case LOGIN_FAILURE:
               return { ...state, user: [], error: action.payload, loading: false }
          case LOGOUT:
               return { ...state, user:[], error: '', loading: false}
          default: 
               return state;
     }
  }

  export default reducer