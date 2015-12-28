/// <reference path="../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';

const css = require('./dashboard.scss');

interface DashboardProps {}

class DashboardContainer extends React.Component<DashboardProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        // const {dashboard} = this.props;
        return (<div>Dashboard Container</div>);
    }
}
export default DashboardContainer;