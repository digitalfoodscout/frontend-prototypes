import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import Login from './containers/Login'
import 'todomvc-app-css/index.css'
import './styles/dgfs_style.css'
import {
  HashRouter,
  Route
} from 'react-router-dom';
import reducer from './reducers';
import logger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Symptom from "./containers/Symptom";
import FoodDiaryEntry from "./containers/FoodDiaryEntry";
import Register from "./containers/Register";

injectTapEventPlugin();
const store = createStore(reducer, applyMiddleware(
  logger
));
console.log(store.getState());

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About}/>
          <Route path="/fooddiaryentry" component={FoodDiaryEntry}/>
          <Route path="/symptom" component={Symptom}/>

        </div>
      </HashRouter>
    </Provider>
  </MuiThemeProvider>
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);
