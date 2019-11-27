import { QuestionsActionTypes } from './types'

export const requestQuestions = () => {
  return { type: QuestionsActionTypes.REQUESTED_QUESTIONS }
}

export const requestQuestionsSuccess = (data) => {
  return { type: QuestionsActionTypes.REQUESTED_QUESTIONS_SUCCEEDED, questions: data }
}

export const requestQuestionsError = () => {
  return { type: QuestionsActionTypes.REQUESTED_QUESTIONS_FAILED }
}

export const fetchQuestions = () => {
  return { type: QuestionsActionTypes.FETCHED_QUESTIONS }
};
