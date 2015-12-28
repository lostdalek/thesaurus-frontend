/// <reference path="../../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';

const css = require('./sample.scss');

interface SampleProps {}

class SampleContainer extends React.Component<SampleProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        // const {sample} = this.props;
        return (<div>Sample Container</div>);
    }
}
export default SampleContainer;