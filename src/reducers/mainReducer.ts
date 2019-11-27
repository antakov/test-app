// Import Reducer type
import { Reducer } from 'redux'
import { QuestionsActions, QuestionsActionTypes }  from '../actions/types'

import {IState} from '../models/types'

// Define the initial state
const initialState: IState = {
  questions: [],
  loading: false,
  error: false
};

export const mainReducer: Reducer<IState, QuestionsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case QuestionsActionTypes.REQUESTED_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case QuestionsActionTypes.REQUESTED_QUESTIONS_SUCCEEDED:
      return {
        ...state,
        questions: action.questions,
        loading: false
      };
    case QuestionsActionTypes.REQUESTED_QUESTIONS_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
