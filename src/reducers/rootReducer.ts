/// <reference path="../../typings/tsd.d.ts" />

import { combineReducers } from 'redux';

import appConfig from './appConfig';
import todos from './../components/todo/reducers/todos';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import route from "react-router/lib/PropTypes";

const rootReducer = combineReducers({
  appConfig: appConfig,
  todos: todos,
  routing: routeReducer
});

export { rootReducer };
