import * as React from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import Dashboard = require('./containers/dashboard');
const DashboardRoutes = {
    path: 'dashboard',
    getComponent: (location, cb) => {
        let module = <typeof Dashboard>require('./containers/dashboard');
        cb(null, module['default']);

    }
};


export default DashboardRoutes;