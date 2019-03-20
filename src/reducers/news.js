import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../actions/news'
import initialState from '../initial-states/news'

const reducer = (state = initialState, action) => {
   switch (action.type) {
     case GET_NEWS_REQUEST:
          return { ...state, error:'', loading: true }
     case GET_NEWS_SUCCESS:
          return { ...state, news: action.payload, error:'', loading: false }
      case GET_NEWS_FAILURE:
            return { ...state, news: [], error: action.payload, loading: false }
     default: 
          return state;
   }
  }

  export default reducer