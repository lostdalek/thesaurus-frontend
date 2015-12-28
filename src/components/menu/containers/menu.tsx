/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';

const css = require('./menu.scss');

interface MenuProps {
    menu?: any;
    dispatch?: Redux.Dispatch;
}

class Menu extends React.Component<MenuProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menu: {}
        };
    }

    renderChildren(menu) {
        console.log('render children', menu);


        if (menu.children && menu.children.length) {
            let renderedChildren = [];

            menu.children.map( (child) => {
                renderedChildren.push(
                    <li className={classnames('')}>
                        <a href="#">
                            <i className="icon"></i>
                            label
                        </a>
                    </li>
                );
            });

            return (renderedChildren);
        }

        return null;
    }
    render() {
        console.log('render', this.props);

        const {menu} = this.props;
        return (
            <nav className={classnames('navbar',  'navbar-top',  'navbar-inverse')}>
                <div className={classnames('container-fluid')}>
                    <div className={classnames('navbar-header')}>
                        <a className={classnames('navbar-brand')} href="#">
                            <span className={classnames('glyphicon glyphicon-home')}></span> title
                        </a>
                    </div>

                    <div className={classnames('collapse navbar-collapse" id="bs-example-navbar-collapse-6')}>>
                        <ul className={classnames('nav navbar-nav')}>


                        </ul>

                        <ul className={classnames('nav navbar-nav navbar-right')}>
                            <li>Current date:</li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
    }
}
export default Menu;
/*
const mapStateToProps = state => ({
    menu: state.menu
});

export default connect(mapStateToProps)(menu);
    */
