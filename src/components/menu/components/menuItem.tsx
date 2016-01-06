/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from 'react';
import { Link } from 'react-router';
import * as classnames from 'classnames';


interface MenuItemProps {
    key: number;
    data: ApplicationMenuItem;
}

class MenuItem extends React.Component<MenuItemProps, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (<li>
            <Link to={`${this.props.data.path}`}>{this.props.data.label}</Link>

            <ul className={classnames('nav navbar-nav')}>
                {/*this.renderChildren(menu)*/}

                {this.props.data.children && this.props.data.children.map(function(child: ApplicationMenuItem) {
                    return <MenuItem key={child.id} data={child}/>;
                    })}
            </ul>
        </li>)
    }
}
export {MenuItemProps, MenuItem}