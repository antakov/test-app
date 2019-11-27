/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../sagas'

import { composeWithDevTools } from 'redux-devtools-extension'

// Import reducers and state type
import {mainReducer} from '../reducers/mainReducer'

import {IState} from '../models/types'

// Create an interface for the application state
export interface IAppState {
  appState: IState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  appState: mainReducer,
});

const sagaMiddleware = createSagaMiddleware();

// Create a configure store function of type `IAppState`

const store: Store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
