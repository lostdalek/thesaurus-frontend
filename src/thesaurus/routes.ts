import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import Thesaurus = require('./containers/thesaurus');
const ThesaurusRoutes = {
    path: 'thesaurus',
    getComponent: (location, cb) => {
        let module = <typeof Thesaurus>require('./containers/thesaurus');
        cb(null, module['default']);

    }
};


export default ThesaurusRoutes;