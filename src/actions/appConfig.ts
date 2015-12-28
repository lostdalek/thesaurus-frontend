/// <reference path="../../typings/tsd.d.ts" />

import { createAction, Action } from 'redux-actions';

import { IAppConfigRecord, IAppConfigModel, AppConfigModel } from '../models/appModel';
import * as types from '../constants/actionsTypes';

const updateUserLang = createAction<IAppConfigModel>(
    types.UPDATE_APP_LANG,
    (appConfig: IAppConfigRecord<IAppConfigModel>, newLang: string) => appConfig.set('userLang', newLang)
);

export {
    updateUserLang
}
