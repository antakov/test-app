// Import Typing
import {IQuestion} from '../models/types'

// Create Action Constants
export enum QuestionsActionTypes {
    REQUESTED_QUESTIONS = 'REQUESTED_QUESTIONS',
    REQUESTED_QUESTIONS_SUCCEEDED = 'REQUESTED_QUESTIONS_SUCCEEDED',
    REQUESTED_QUESTIONS_FAILED = 'REQUESTED_QUESTIONS_FAILED',
    FETCHED_QUESTIONS = 'FETCHED_QUESTIONS'
  }

// Interfaces
export interface IQuestionGetQuestionsBeginAction {
    type: typeof QuestionsActionTypes.REQUESTED_QUESTIONS
}
  
export interface IQuestionGetQuesSuccessAction {
    type: typeof QuestionsActionTypes.REQUESTED_QUESTIONS_SUCCEEDED
    questions: IQuestion[]
}
  
export interface IQuestionGetQuesFailureAction {
    type: typeof QuestionsActionTypes.REQUESTED_QUESTIONS_FAILED
}

export interface IQuestionFetchedQuestionsAction {
    type: typeof QuestionsActionTypes.FETCHED_QUESTIONS
}

// Combine the action types with a union (we assume there are more)
export type QuestionsActions = IQuestionGetQuestionsBeginAction | IQuestionGetQuesSuccessAction | IQuestionGetQuesFailureAction | IQuestionFetchedQuestionsAction;
