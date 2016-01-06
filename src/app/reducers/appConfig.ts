/// <reference path="../../../typings/tsd.d.ts" />

import { handleActions, Action } from 'redux-actions';
import * as Immutable from 'immutable';
import * as _ from 'lodash';
// import omit from 'lodash/object/omit';
// import assign from 'lodash/object/assign';
// import mapValues from 'lodash/object/mapValues';

import { IAppConfigModel, AppConfigModel } from '../models/appModel';
import {
    FETCH_MENU,
    UPDATE_APP_LANG
} from '../../constants';

export const initialConfigState: IAppConfigModel = new AppConfigModel({
    userLang: 'fr',
    menu: [{
        id: 1,
        label: 'Home',
        children: [{
            id: 11,
            label: 'Dashboard'
        }, {
            id: 12,
            label: 'Thesaurus'
        }]
    }]
});

export default handleActions<IAppConfigModel>({
    ['FETCH_THING']:  (state: IAppConfigModel, action: Action): IAppConfigModel => {
        if (typeof state === 'undefined') {
            return initialConfigState;
        }
        console.log('state',state, action)
        return (_.assign({}, state, {
            menu: action.payload.menu
        }) as IAppConfigModel);
    },
    [FETCH_MENU]: (state: IAppConfigModel, action: Action): IAppConfigModel => {
        if (typeof state === 'undefined') {
            return initialConfigState;
        }
        console.log('state',state, action)
        return (_.assign({}, state, {
            menu: action.payload.menu
        }) as IAppConfigModel);
    },
    [UPDATE_APP_LANG]: (state: IAppConfigModel, action: Action): IAppConfigModel => {
        console.log(state, action)
        if (typeof state === 'undefined') {
            return initialConfigState;
        }
        return (_.assign({}, state, {
            userLang: action.payload.userLang
        }) as IAppConfigModel);
    }
}, initialConfigState);
