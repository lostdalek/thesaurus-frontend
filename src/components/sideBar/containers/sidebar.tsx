/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
//import * as Immutable from 'immutable';
import * as AppActions from '../../../actions/appConfig';
import * as classnames from 'classnames';

import TreeContainer from '../../tree/containers/treeContainer';
import Menu from '../../menu/containers/menu';
import TitleBar from '../../titleBar/containers/titleBar';

import {IAppConfigRecord, IAppConfigModel, AppConfigModel} from "../../../models/appModel";



import {initialConfigState} from '../../../reducers/appConfig';
import {initialMainMenuState} from '../../../reducers/mainMenu';

let SidebarComponent = (require('react-sidebar') as any);
const css = (require('./sidebar.scss') as any);


interface SidebarProps extends React.Props<Sidebar> {
    appConfig: IAppConfigModel; //AppConfigRecord<IAppConfigModel>; // not defined first time
    mainMenu: any;
    children: any;
    dispatch?: Redux.Dispatch;
}

class Sidebar extends React.Component<SidebarProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            sidebarOpen: false,
            docked: true,
            transitions: true,
            touch: true,
            shadow: false,
            pullRight: false,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
            appConfig: initialConfigState,
            menu: initialMainMenuState
        };
        console.log('STATE', this.state)
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    onSetOpen(open) {
        this.setState({sidebarOpen: open});
    }

    menuButtonClick(ev) {
        ev.preventDefault();
        console.log('STATE', this.state)
        this.onSetOpen(!this.state.sidebarOpen);
    }

    render() {
        const {appConfig, mainMenu, dispatch} = this.props;
        const actions = bindActionCreators(AppActions, dispatch);

        // define title bar content
        const contentHeader = (
            <span>
                {!this.state.docked &&
                <a onClick={this.menuButtonClick.bind(this)} href="#">=</a>}
                <span> React Sidebar</span>
            </span>);

        const sidebar = <Menu menu={mainMenu}/>; //<SidebarContent />;
        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.sidebarOpen,
            touch: this.state.touch,
            shadow: this.state.shadow,
            pullRight: this.state.pullRight,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };

        let element = (
            <span onClick={() => actions.updateUserLang(appConfig,'frrr')} >change lang: {appConfig.userLang}</span>
        );
        let sidebarContent = <b>Sidebar content</b>;

        return (
            <SidebarComponent {...sidebarProps}>
                <div className={classnames('container-fluid')}>
                    <TitleBar title={contentHeader} />
                    <div className="row">
                        <div className="col-md-12">
                            {React.cloneElement(this.props.children, {appConfig: appConfig})}
                        </div>
                    </div>
                </div>
            </SidebarComponent>

        );
    }
}

export default Sidebar;
