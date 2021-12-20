import {  call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, loadDataSuccess, failure } from '../actions'
import { getData } from '../../api/news'

function* loadReceptsSaga() {
  try {
    const data = yield call(getData) 
     yield put(loadDataSuccess(data))
  } catch (err) {
     yield put(failure(err))
  }
}

function* rootSaga() {
  yield takeEvery(actionTypes.LOAD_DATA, loadReceptsSaga)
}

export default rootSaga