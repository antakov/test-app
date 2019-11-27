import * as React from 'react'
import * as ReactDOM from 'react-dom'

/* Make the store available to all container
components in the application without passing it explicitly */
import { Provider, connect } from 'react-redux'

// Store type from Redux
import { Store } from 'redux'

// Import the store function and state
import store, { IAppState } from './store/Store'

// import './styles/App.scss';
import RootComponent from "./components/RootComponent"

interface IProps {
  store: Store<IAppState>;
}

const ConnectedApp = connect((state) => {
  return state;
})(RootComponent);

/*
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
Render the App
*/
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
