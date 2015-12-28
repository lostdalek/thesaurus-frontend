/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';

const css = require('./titleBar.scss');

interface TitleBarProps {
    title?: any;
    children?: any;
}

class TitleBarContainer extends React.Component<TitleBarProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const {title} = this.props;
        return (<div className="titleBar">
            <div>title nbar{title}</div>
            <div className="test"> {this.props.children}</div>
        </div>);
    }
}
export default TitleBarContainer;