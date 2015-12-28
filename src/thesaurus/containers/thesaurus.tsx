/// <reference path="../../../typings/tsd.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as classnames from 'classnames';

const css = require('./thesaurus.scss');

interface ThesaurusProps {}

class ThesaurusContainer extends React.Component<ThesaurusProps, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        // const {thesaurus} = this.props;
        return (<div>Thesaurus Container</div>);
    }
}
export default ThesaurusContainer;