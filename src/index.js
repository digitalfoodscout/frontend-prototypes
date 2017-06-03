import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route} from 'react-router-dom';
import reducer from './reducers';
import 'todomvc-app-css/index.css'
import './styles/dgfs_style.css'
import App from './containers/App'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import Symptom from "./containers/Symptom";
import FoodDiaryEntry from "./containers/FoodDiaryEntry";
import Register from "./containers/Register";

// This is needed for correct tap events with material ui
injectTapEventPlugin();

const store = createStore(reducer, applyMiddleware(
  logger
));
console.log(store.getState());

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/app" component={App}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/register" component={Register}/>
          <Route path="/fooddiaryentry" component={FoodDiaryEntry}/>
          <Route path="/symptom" component={Symptom}/>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);
