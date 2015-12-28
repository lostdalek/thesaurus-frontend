/// <reference path="../../../typings/tsd.d.ts" />

import * as Immutable from 'immutable';

export interface IMainMenuModel {
    path: string;
    label: string;
    children?: IMainMenuModel;
};

export type IMainMenuRecord<T> = Immutable.Record.IRecord<IMainMenuModel>

/// Instantiating this constructor generates an immutable MainMenu record wrapper.
export const MainMenuModel = Immutable.Record<IMainMenuModel>({
    path: '#/home',
    label: 'home'
}, "MainMenuModel");
