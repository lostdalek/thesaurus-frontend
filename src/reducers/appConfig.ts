/// <reference path="../../typings/tsd.d.ts" />

import { handleActions, Action } from 'redux-actions';
import * as Immutable from 'immutable';
import * as _ from 'lodash';
// import omit from 'lodash/object/omit';
// import assign from 'lodash/object/assign';
// import mapValues from 'lodash/object/mapValues';

import { IAppConfigModel, AppConfigModel } from '../models/appModel';
import {
    UPDATE_APP_LANG
} from '../constants/actionsTypes';

export const initialConfigState: IAppConfigModel = new AppConfigModel({
    userLang: 'fr'
});

export default handleActions<IAppConfigModel>({
    [UPDATE_APP_LANG]: (state: IAppConfigModel, action: Action): IAppConfigModel => {

        if (typeof state === 'undefined') {
            return initialConfigState;
        }
        return new AppConfigModel({
            userLang: action.payload.userLang
        });
        /*return _.assign(initialConfigState, state, {
            userLang: action.payload.userLang
        });*/
        return state;
    }
}, initialConfigState);
