/// <reference path="../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
//import * as Immutable from 'immutable';
import * as AppActions from '../actions/appConfig';
import * as classnames from 'classnames';

import TreeContainer from '../components/tree/containers/treeContainer';
import Menu from '../components/menu/containers/menu';
import TitleBar from '../components/titleBar/containers/titleBar';
import Sidebar from '../components/Sidebar/containers/sidebar';
import DashboardContainer from '../components/dashboard/containers/dashboard';

import {IAppConfigRecord, IAppConfigModel, AppConfigModel} from "../models/appModel";



import {initialConfigState} from '../reducers/appConfig';
import {initialMainMenuState} from '../reducers/mainMenu';

const css = (require('./app.scss') as any);


interface AppProps extends React.Props<App> {
    appConfig: IAppConfigModel; //AppConfigRecord<IAppConfigModel>; // not defined first time
    mainMenu: any;
    children: any;
    dispatch?: Redux.Dispatch;
}

class App extends React.Component<AppProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            appConfig: initialConfigState,
            menu: initialMainMenuState
        };
    }

    render() {
        console.log('Application props', this.props)
        const {appConfig, mainMenu, dispatch} = this.props;
        const actions = bindActionCreators(AppActions, dispatch);
        const sidebarProps = {
            appConfig: appConfig,
            children: this.props.children,
            mainMenu: this.props.mainMenu
        };

        let element = (
            <span onClick={() => actions.updateUserLang(appConfig,'frrr')} >change lang: {appConfig.userLang}</span>
        );

        //let sidebarContent = <b>Sidebar content</b>;

        return (
            <Sidebar {...sidebarProps}>
                {React.cloneElement(this.props.children || <DashboardContainer/>, {appConfig: appConfig})}
            </Sidebar>
        );
        /*

        return (
            <div className={classnames(css.app, 'container-fluid')}>
                <div className="row">
                <div className="col-md-2">
                    <menu menu={mainMenu}/>
                </div>
                <div className="col-md-10">
                    <p>{element}</p>
                    <TreeContainer />
                </div>
                </div>
            </div>
        );
        */
    }
}

const mapStateToProps = state => ({
    appConfig: state.appConfig,
    mainMenu: state.mainMenu
});

export default connect(mapStateToProps)(App);
