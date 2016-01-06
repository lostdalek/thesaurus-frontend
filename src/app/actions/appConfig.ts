/// <reference path="../../../typings/tsd.d.ts" />

import  'whatwg-fetch';
import { createAction, Action } from 'redux-actions';
import {processResponse} from '../../utils/process-response';
import {handleActionError} from '../../utils/handle-action-error';
import { IAppConfigRecord, IAppConfigModel, AppConfigModel } from '../models/appModel';
import * as types from '../../constants';
import {THESAURUS_API} from "../../constants";




const doFetchMenu = function(options?: any) {
    const  username  = 'test';

    return dispatch => {
        fetch(`${THESAURUS_API}/menu/${username}`)
            .then(processResponse)
            .then(res => dispatch({
                type: types.FETCH_MENU,
                payload: {
                    menu: res // res
                }
            }))
            .catch(error => handleActionError(dispatch, error, types.FETCH_MENU))
    }
};

const doUpdate = (appConfig: IAppConfigRecord<IAppConfigModel>, newLang: string) => {
    console.log('pass args', appConfig, newLang)
    return appConfig.set('userLang', newLang);
}


const updateUserLang =  (newLang: string) => {
    return {
        type: types.UPDATE_APP_LANG,
        payload: {
            userLang: newLang
        }
    }
}
const fetchMenu = createAction<any>(
    types.FETCH_MENU,
    (options: any) => {
        console.log('create action')
        return doFetchMenu(options)
    }
);

export {
    fetchMenu,
    updateUserLang
}
