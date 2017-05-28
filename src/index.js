import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import Login from './containers/Login'
import 'todomvc-app-css/index.css'
import './styles/dgfs_style.css'
import {NAV_LOGIN} from './constants/NavigationStates'
import {
  HashRouter,
  Route
} from 'react-router-dom';
import reducerLogin from './reducers/login';

const initial_state = {
  nav: NAV_LOGIN
};
const store = createStore(reducerLogin, initial_state);
console.log(store.getState());

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
      </div>
    </HashRouter>
  </Provider>
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);
