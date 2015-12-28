/// <reference path="../../typings/tsd.d.ts" />
import * as constants from '../constants';

let handleActionError = function(dispatch, error, source) {
    return dispatch({
        type: constants.SHOW_ERROR,
        source,
        payload: error,
        error: true
    })
}
export {handleActionError}