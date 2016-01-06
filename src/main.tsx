/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {connect, Provider} from 'react-redux';
import { createHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
let thunk = require("redux-thunk");
import { Action } from 'redux-actions';
import * as classnames from 'classnames';



import DashboardRoutes from './dashboard/routes';
import ThesaurusRoutes from './thesaurus/routes';
import App from './app/containers/app.tsx';
import {IAppConfigRecord, IAppConfigModel, AppConfigModel} from './app/models/appModel';
import {IMainMenuRecord, IMainMenuModel, MainMenuModel} from './app/models/mainMenuModel';
import { rootReducer } from './app/reducers/rootReducer.ts';
import {initialConfigState} from './app/reducers/appConfig';

let promiseMiddleware = require('redux-promise');
let css = require('./main.scss');

const initialState = {
    application: {
        version: '1.0'
    }
};
const middlewares = [
    (thunk as any),
    (promiseMiddleware as any)
];

const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
)(createStore);

const store: Store = createStoreWithMiddleware(rootReducer, initialState);
const history = createHistory();

syncReduxAndRouter(history, store);

const rootRoute = [{
    path: '/',
    component: App,
    childRoutes: [
        DashboardRoutes, ThesaurusRoutes
    ]
}];

/*import * as types from './constants';
import * as appActions from './app/actions/appConfig';
let storeState = store.getState();
console.log(store.getState())
store.dispatch(appActions.fetchMenu())
store.dispatch(appActions.updateUserLang('ok updated'))
storeState = store.getState();
console.log(storeState.appConfig.userLang);*/




ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={rootRoute} />
    </Provider>,
    document.getElementById('root')
);

