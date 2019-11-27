
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { QuestionsActionTypes } from './../actions/types'
import { requestQuestions, requestQuestionsSuccess, requestQuestionsError } from './../actions/questionActions'
import { serverUrl } from './../consts/apiConsts'

function* watchFetchQuestions() {
    yield takeEvery(QuestionsActionTypes.FETCHED_QUESTIONS, fetchQuestionsAsync);
}

function* fetchQuestionsAsync() {
  try {
    yield put(requestQuestions())
    const data = yield call(() => {
      return fetch(serverUrl + 'questions').then(res => res.json())
    })
   
    yield put(requestQuestionsSuccess(data))
  } catch (error) {
    yield put(requestQuestionsError())
  }
}

export function* rootSaga() {
  yield all([
    watchFetchQuestions(),
  ])
}
