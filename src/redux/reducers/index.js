import { actionTypes } from '../actions'

const initialState = {
  data: [],
  item: {},
  error: "",
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_ALL_NEWS_SUCCESS:
      return {
        ...state,
        ...{ data: action.data },
      }

    case actionTypes.LOAD_ONE_NEWS_SUCCESS:
      return {
        ...state,
        ...{ item: action.data },
      }
    case actionTypes.CLEAR_ONE_NEWS_STATE:
      return {
        ...state,
        ...{ item: {} },
      }

    default:
      return state
  }
}

export default reducer