/// <reference path="classnames/classnames.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="react-redux/react-redux.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="redux-actions/redux-actions.d.ts" />
/// <reference path="redux/redux.d.ts" />
/// <reference path="immutable/immutable-overrides.d.ts" />
/// <reference path="whatwg-fetch/whatwg-fetch.d.ts" />
/// <reference path="global.d.ts" />
/// <reference path="es6-promise/es6-promise.d.ts" />

declare module "redux-simple-router" {
    import { Store } from 'redux';
    interface Istate {
        changeId: number;
        path: string;
        state: any;
        replace: boolean;
    }
    export function syncReduxAndRouter(history: any, store: Store, selectRouterState?: any)

    export function routeReducer(state: Istate, { type, payload })

}

declare module "redux-promise-middleware" {
    export function promiseMiddleware()
}
