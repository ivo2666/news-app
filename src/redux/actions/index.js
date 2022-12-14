export const actionTypes = {
    FAILURE: 'FAILURE',
    LOAD_ONE_NEWS: 'LOAD_ONE_NEWS',
    LOAD_ALL_NEWS: 'LOAD_ALL_NEWS',
    LOAD_ALL_NEWS_SUCCESS: 'LOAD_ALL_NEWS_SUCCESS',
    LOAD_ONE_NEWS_SUCCESS: 'LOAD_ONE_NEWS_SUCCESS',
    CLEAR_ONE_NEWS_STATE: 'STATE_ONE_NEWS_STATE',
  }
  
  export function failure(error) {
    return {
      type: actionTypes.FAILURE,
      error,
    }
  }
  
  export function loadAllNews() {
    return { type: actionTypes.LOAD_ALL_NEWS }
  }

  export function loadOneNews() {
    return { type: actionTypes.LOAD_ONE_NEWS }
  }
  
  export function loadAllNewsSuccess(data) {
    return {
      type: actionTypes.LOAD_ALL_NEWS_SUCCESS,
      data,
    }
  }
  export function loadOneNewsSuccess(data) {
    return {
      type: actionTypes.LOAD_ONE_NEWS_SUCCESS,
      data,
    }
  }
  export function clearOneNewsState() {
    return {
      type: actionTypes.CLEAR_ONE_NEWS_STATE,
    }
  }