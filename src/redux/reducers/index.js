import { actionTypes } from '../actions'

const initialState = {
  data: [],
  error: {},
}

function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ data: action.data },
      }

    default:
      return state
  }
}

export default reducer