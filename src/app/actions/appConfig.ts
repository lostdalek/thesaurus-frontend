/// <reference path="../../../typings/tsd.d.ts" />

import  'whatwg-fetch';
import { createAction, Action } from 'redux-actions';
import {processResponse} from '../../utils/process-response';
import {handleActionError} from '../../utils/handle-action-error';
import { IAppConfigRecord, IAppConfigModel, AppConfigModel } from '../models/appModel';
import * as types from '../../constants';
import {THESAURUS_API} from "../../constants";




const fetchMenu = function(options?: any) {
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

const updateUserLang = createAction<IAppConfigModel>(
    types.UPDATE_APP_LANG,
    (appConfig: IAppConfigRecord<IAppConfigModel>, newLang: string) => appConfig.set('userLang', newLang)
);

export {
    fetchMenu,
    updateUserLang
}
