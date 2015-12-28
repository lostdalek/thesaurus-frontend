/// <reference path="../../../../typings/tsd.d.ts" />

/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';*/
import * as React from 'react';
import * as classnames from 'classnames';
import {MenuItemProps, MenuItem} from '../components/menuItem';

const css = require('./menu.scss');

interface MenuProps {
    menu?: any;
}

class Menu extends React.Component<MenuProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            menu: {}
        };
    }
    render() {
        const {menu} = this.props;
        console.log('render', menu);
        return (
            <nav className={classnames('navbar',  'navbar-top',  'navbar-inverse')}>

                    <div className={classnames('navbar-header')}>
                        <a className={classnames('navbar-brand')} href="#">
                            <span className={classnames('glyphicon glyphicon-home')}></span> title
                        </a>
                    </div>

                    <div className={classnames('collapse navbar-collapse')}>

                        <ul className={classnames('nav nav-pills nav-stacked')}>
                            {menu.map(function(child: ApplicationMenuItem) {
                                return <MenuItem key={child.id} data={child}/>;
                                })}
                        </ul>
                    </div>

            </nav>
        );
    }
}
export default Menu;

