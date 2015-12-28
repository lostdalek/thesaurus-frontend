/// <reference path="../../typings/tsd.d.ts" />

import { handleActions, Action } from 'redux-actions';
import * as Immutable from 'immutable';
// import * as _ from 'lodash';

import { IMainMenuModel, MainMenuModel } from '../models/mainMenuModel';

/*import {
    UPDATE_APP_LANG
} from '../constants/actionsTypes';*/

export const initialMainMenuState: IMainMenuModel = new MainMenuModel({
    path: '#/home',
    label: 'home'
});

export default handleActions<IMainMenuModel>({

}, initialMainMenuState);
