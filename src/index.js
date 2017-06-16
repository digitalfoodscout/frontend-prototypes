import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from './reducers';
import './styles/dgfs_style.css';
import App from './containers/App';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Settings from './containers/Settings';
import Symptom from "./containers/Symptom";
import FoodDiaryEntry from "./containers/FoodDiaryEntry";
import Register from "./containers/Register";

// This is needed for correct tap events with material ui
injectTapEventPlugin();

const initialState = {
  meals: [
    {
      id: 1,
      name: "Aal mit Küchenabfällen",
      date: new Date('2017-04-11T10:20:30Z'),
      contains: [
        {
          amount: 500,
          food: {
            id: 'BC200100',
            name: 'Aal mit Küchenabfällen'
          }
        }
      ]
    },
    {
      id: 2,
      name: "Müsli und Kaffee",
      date: new Date('2017-04-12T10:20:30Z'),
      contains: [
        {
          amount: 100,
          food: {
            id: 'BC20001',
            name: 'Kaffee'
          }
        },
        {
          amount: 300,
          food: {
            id: 'BC20003',
            name: 'Müsli'
          }
        }
      ]
    },
    {
      id: 3,
      name: "Pizza, Bier",
      date: new Date('2017-04-12T20:00:30Z'),
      contains: [
        {
          amount: 333,
          food: {
            id: 'BC20004',
            name: 'Bier'
          }
        },
        {
          amount: 500,
          food: {
            id: 'BC20003',
            name: 'Pizza'
          }
        }
      ]
    }
  ]
};

const store = createStore(reducer, initialState, applyMiddleware(
  logger
));
console.log(store.getState());

const Root = ({ store }) => (
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
