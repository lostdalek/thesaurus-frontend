/// <reference path="../../typings/tsd.d.ts" />

import * as Immutable from 'immutable';

export interface IAppConfigModel {
    userLang: string;
};

export type IAppConfigRecord<T> = Immutable.Record.IRecord<IAppConfigModel>

/// Instantiating this constructor generates an immutable AppConfig record wrapper.
export const AppConfigModel = Immutable.Record<IAppConfigModel>({ userLang:'fr' }, "AppConfigModel");
