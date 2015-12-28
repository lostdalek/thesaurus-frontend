/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {connect, Provider} from 'react-redux';
import { createHistory } from 'history'
import { Router, Route, IndexRoute } from 'react-router'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
// import {thunk} from 'redux-thunk'; // import thunkMiddleware = require('redux-thunk'); //
let thunk = require("redux-thunk");
import { Action } from 'redux-actions';
import * as classnames from 'classnames';

// import Dashboard from './components/dashboard/containers/dashboard';
import DashboardRoutes from './components/dashboard/routes';
// import Thesaurus from './components/thesaurus/containers/thesaurus';
import ThesaurusRoutes from './components/thesaurus/routes';
import App from './containers/app.tsx';
import {IAppConfigRecord, IAppConfigModel, AppConfigModel} from './models/appModel';
import {IMainMenuRecord, IMainMenuModel, MainMenuModel} from './models/mainMenuModel';
import { rootReducer } from './reducers/rootReducer.ts';
import {initialConfigState} from './reducers/appConfig';
import {initialMainMenuState} from './reducers/mainMenu';

const css = require('./main.scss');
const initialState = {};
const mainMenu = {
    module: 'rot',
    children: [{
        module: 'a1',
        children: [{
            module: 'aa1',
            leaf: true
        }, {
            module: 'aa2',
            leaf: true
        }]
    }, {
        module: 'a2'
    }]
};

// function compose<T extends Function>(...functions: Function[]): T;

// middleware should be active in dev only:
const createStoreWithMiddleware = compose(
    applyMiddleware((thunk as any)),
    (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
)(createStore);

const store: Store = createStoreWithMiddleware(rootReducer, initialState);

const history = createHistory();
//const store: Store = createStore(rootReducer, initialState);
syncReduxAndRouter(history, store);

/*const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: App,
        childRoutes: [
            DashboardRoutes, ThesaurusRoutes
        ]
    } ]
};*/
const rootRoute = [{
    path: '/',
    component: App,
    childRoutes: [
        DashboardRoutes, ThesaurusRoutes
    ]
}];
ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={rootRoute} />
    </Provider>,
    document.getElementById('root')
);
/*
ReactDOM.render(
  <Provider store={store}>
      <Router  onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <Route path="/" component={App}>
              <IndexRoute component={Dashboard}/>
              <Route path="dashboard" component={Dashboard}/>
              <Route path="thesaurus/:databaseId" component={Thesaurus}/>
          </Route>
      </Router>

  </Provider>,
  document.getElementById('root')
);*/
// <App appConfig={initialConfigState} mainMenu={initialMainMenuState}/>
