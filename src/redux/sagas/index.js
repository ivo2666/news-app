import { all, call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, loadOneNewsSuccess, loadAllNewsSuccess, failure } from '../actions'
import { getData, getOne } from '../../api/news'

function* loadAllNewsSaga() {
  try {
    const data = yield call(getData) 
     yield put(loadAllNewsSuccess(data))
  } catch (err) {
     yield put(failure(err))
  }
}

function* loadOneNewsSaga({action}) {
  try {
    const data = yield call(getOne, action) 
     yield put(loadOneNewsSuccess(data[0]))
  } catch (err) {
     yield put(failure(err))
  }
}

function* watchLoadAllNewsSaga() {
  yield takeEvery(actionTypes.LOAD_ALL_NEWS, loadAllNewsSaga)
}

function* watchLoadOneNewsSaga() {
  yield takeEvery(actionTypes.LOAD_ONE_NEWS, loadOneNewsSaga)
}

function* rootSaga() {
  yield all([
    watchLoadAllNewsSaga(),
    watchLoadOneNewsSaga()
  ])
}

export default rootSaga