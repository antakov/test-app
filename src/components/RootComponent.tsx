import { useEffect } from 'react'
import * as React from 'react'

import { IAppState } from "../store/Store"
import { IQuestion } from "../models/types"

import { fetchQuestions } from './../actions/questionActions'

import { connect } from 'react-redux'

interface IProps {
  fetchQuestions: any
  questions: IQuestion[]
  loading: boolean
  error: boolean
}

const RootComponent: React.FC<IProps> = ({ fetchQuestions, questions, loading, error }) => {
  const [answerStatus, setAnswerStatus] = React.useState<boolean | undefined>(undefined)

  //componentDidMont simulation
  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <div className="screen">
      {loading && <h3>Loading, please wait...</h3>}

      {error && <h3>Error occured</h3>}

      {questions && questions.length > 0 && !loading && !error &&
        <div className="inner-wrapper fadein">
          <h3>Let's play</h3>

          <h1>{questions[0]['question']}</h1>

          <div className="row">
            {typeof answerStatus === 'boolean' && !answerStatus &&
              <span className="answer">{questions[0]['no']}</span>
            }

            {answerStatus &&
              <span className="answer">{questions[0]['yes']}</span>
            }
          </div>

          {typeof answerStatus === 'undefined' &&
            <div className="row">
              <div className="btn" onClick={() => { setAnswerStatus(true) }}>Yes</div>
              <div className="btn" onClick={() => { setAnswerStatus(false) }}>No</div>
            </div>
          }
        </div>
      }
    </div>
  )
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

const mapStateToProps = (store: IAppState) => {
  return {
    questions: store.appState.questions,
    loading: store.appState.loading,
    error: store.appState.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
