/// <reference path="../../../../typings/tsd.d.ts" />

import * as React from 'react';
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
        // const {menuItem} = this.props.data;
        console.log('>>>>>>', this.props)
        return (<li>{this.props.data.label}

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