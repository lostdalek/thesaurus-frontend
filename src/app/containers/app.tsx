/// <reference path="../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
//import * as Immutable from 'immutable';
import * as AppActions from '../actions/appConfig';
import * as classnames from 'classnames';

import TreeContainer from '../../components/tree/containers/treeContainer';
import Menu from '../../components/menu/containers/menu';
import TitleBar from '../../components/titleBar/containers/titleBar';
import Sidebar from '../../components/Sidebar/containers/sidebar';
import DashboardContainer from '../../dashboard/containers/dashboard';

import {IAppConfigRecord, IAppConfigModel, AppConfigModel} from "../models/appModel";



import {initialConfigState} from '../reducers/appConfig';

const css = (require('./app.scss') as any);


interface AppProps extends React.Props<App> {
    appConfig: IAppConfigModel; //AppConfigRecord<IAppConfigModel>; // not defined first time
    children: any;
    dispatch?: Redux.Dispatch;
}

class App extends React.Component<AppProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            appConfig: initialConfigState
        };
        // fetch main menu once:
        // let something = this.props.fetchMenu()
    }

    render() {
        console.log('Application props', this.props)
        const {appConfig, dispatch} = this.props;
        const actions = bindActionCreators(AppActions, dispatch);
        const sidebarProps = {
            appConfig: appConfig,
            children: this.props.children,
            //mainMenu: actions.fetchMenu()// mainMenu //this.props.mainMenu
        };

        let element = (
            <span onClick={() => actions.updateUserLang(appConfig,'frrr')} >change lang: {appConfig.userLang}</span>
        );
        return (
            <Sidebar {...sidebarProps}>
                {React.cloneElement(this.props.children || <DashboardContainer/>, {appConfig: appConfig})}
            </Sidebar>
        );
    }
}

const mapStateToProps = state => ({
    appConfig: state.appConfig
});

export default connect(mapStateToProps)(App);

