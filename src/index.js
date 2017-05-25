import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'
import './styles/dgfs_style.css'
import {NAV_LOGIN} from './constants/NavigationStates'


const initial_state = {
    nav: NAV_LOGIN
};
const store = createStore(reducer, initial_state);
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
